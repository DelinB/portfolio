export default function Container({
  children,
  size = "default",
  className = "",
}) {
  const sizeMap = {
    sm: "max-w-4xl",
    default: "max-w-[1440px]",
    wide: "max-w-[1600px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        w-full mx-auto
        ${sizeMap[size]}
        px-4 sm:px-6 lg:px-12 xl:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}