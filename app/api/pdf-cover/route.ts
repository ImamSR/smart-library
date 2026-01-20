import { NextResponse } from "next/server";
import { createCanvas } from "canvas";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/legacy/build/pdf.worker.mjs";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const pdfUrl = searchParams.get("url");

    if (!pdfUrl) {
        return new NextResponse("Missing pdf url", { status: 400 });
    }

    // Fetch PDF
    const pdfBuffer = await fetch(pdfUrl).then((res) => res.arrayBuffer());

    // Load PDF
    const pdf = await pdfjs.getDocument({ data: pdfBuffer }).promise;
    const page = await pdf.getPage(1);

    // Render page
    const viewport = page.getViewport({ scale: 2 });
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext("2d") as unknown as CanvasRenderingContext2D;

    await page.render({
        canvasContext: context,
        viewport,
        canvas: canvas as unknown as HTMLCanvasElement,
    }).promise;

    // Convert to image
    const imageBuffer = canvas.toBuffer("image/png");

    return new NextResponse(Buffer.from(imageBuffer), {
        headers: {
            "Content-Type": "image/png",
            "Cache-Control": "public, max-age=86400",
        },
    });
}
