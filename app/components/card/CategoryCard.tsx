import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoArrowForward } from "react-icons/io5";

type CategoryIcon = React.ElementType;

type CategoryCardProps = {
  category: {
    id: string;
    title: string;
    description: string;
    gradient: string;
    href: string;
  };
  exploreText: string;
  Icon: CategoryIcon;
};

function CategoryCard({ category, exploreText, Icon }: CategoryCardProps) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 relative overflow-hidden"
      onClick={() => router.push(category.href)}
    >
      <div
        className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-linear-to-br ${category.gradient} opacity-10 group-hover:scale-150 transition-transform duration-500`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div
          className={`w-14 h-14 mb-6 rounded-2xl bg-linear-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon className="text-white text-2xl" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {category.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
          {category.description}
        </p>

        <div className="flex items-center text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">
          <span>{exploreText}</span>
          <IoArrowForward className="text-xl ml-1.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryCard;
