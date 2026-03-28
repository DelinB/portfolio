export default function Section({
  children,
  id,
  className = "",
  spacing = "default",
}) {
  const spacingMap = {
    none: "",
    sm: "py-12 sm:py-16",
    default: "py-16 sm:py-20 lg:py-24",
    lg: "py-20 sm:py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={`relative ${spacingMap[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}