interface AddonCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  price: number;
}

export default function AddonCard({ icon, name, description, price }: AddonCardProps) {
  return (
    <div className="rounded-xl p-6 neu-elevated-subtle transition-all duration-300">
      <div className="flex justify-center mb-4 text-accent-gold">
        {icon}
      </div>
      
      <h3 className="font-heading text-xl font-bold text-center mb-3">{name}</h3>
      <p className="text-dev-hub-text-secondary text-sm text-center mb-6 min-h-[3rem]">{description}</p>
      
      <div className="text-center mb-6">
        <span className="text-accent-gold text-lg font-semibold">$</span>
        <span className="text-4xl font-bold text-dev-hub-text-primary">{price}</span>
      </div>

      <button className="w-full bg-transparent border border-accent-gold text-accent-gold py-2.5 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-accent-gold hover:text-text-on-gold">
        Agregar
      </button>
    </div>
  );
}
