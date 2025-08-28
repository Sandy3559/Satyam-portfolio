import { Toaster as Sonner } from "sonner";
import { useTheme } from "next-themes";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = { theme: "dark" };

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card-dark group-[.toaster]:text-primary-lime group-[.toaster]:border-olive-dark group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-secondary-gray",
          actionButton:
            "group-[.toast]:bg-lime-primary group-[.toast]:text-page-dark",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };