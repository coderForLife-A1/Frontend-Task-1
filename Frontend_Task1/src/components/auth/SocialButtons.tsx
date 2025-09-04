import { Button } from "@/components/ui/button";

const SocialButtons = () => {
  const socialProviders = [
    {
      name: "Google",
      icon: "🟢",
      color: "hover:bg-red-50"
    },
    {
      name: "Apple", 
      icon: "🍎",
      color: "hover:bg-gray-50"
    },
    {
      name: "Facebook",
      icon: "🔵", 
      color: "hover:bg-blue-50"
    }
  ];

  return (
    <div className="flex gap-4 justify-center mb-6">
      {socialProviders.map((provider, index) => (
        <Button
          key={provider.name}
          variant="outline"
          size="icon"
          className={`rounded-2xl w-14 h-14 border-2 border-border ${provider.color} transition-all duration-300 transform hover:scale-110 hover:shadow-md animate-fade-in`}
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          <span className="text-xl">{provider.icon}</span>
        </Button>
      ))}
    </div>
  );
};

export default SocialButtons;