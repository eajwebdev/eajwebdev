type BrandLogoProps = {
  className?: string;
  size?: "sm" | "md";
};

const sizeStyles = {
  sm: "h-8 md:h-9",
  md: "h-10 md:h-12",
};

export default function BrandLogo({ className = "", size = "sm" }: BrandLogoProps) {
  const style = sizeStyles[size];

  return (
    <img
      src="/eajicon.png"
      alt="EAJ Web Development Services"
      className={`w-auto ${style} ${className}`.trim()}
      draggable={false}
    />
  );
}
