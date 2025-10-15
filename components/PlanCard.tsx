interface PlanCardProps {
  name: string;
  description: string;
  price: number;
  revisions?: number;
  features: string[];
  buttonText: string;
  isFeatured?: boolean;
}

export default function PlanCard({ name, description, price, revisions, features, buttonText, isFeatured }: PlanCardProps) {
  return (
    <div className={`relative rounded-xl p-8 transition-all duration-300 ${isFeatured ? 'neu-elevated-strong border-2 border-accent-gold' : 'neu-elevated'}`}>
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gold text-text-on-gold px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          Más Popular
        </div>
      )}
      
      <h3 className="font-heading text-2xl font-bold mb-3 text-center">{name}</h3>
      <p className="text-dev-hub-text-secondary text-sm mb-6 min-h-[3rem] text-center">{description}</p>
      
      <div className="mb-6 text-center">
        <div>
          <span className="text-accent-gold text-lg font-semibold">$</span>
          <span className="text-5xl font-bold text-dev-hub-text-primary">{price}</span>
        </div>
        {revisions && (
          <div className="mt-3 inline-block bg-accent-gold/10 border border-accent-gold/30 rounded-full px-4 py-1">
            <span className="text-accent-gold text-xs font-semibold">
              {revisions} {revisions === 1 ? 'Revisión incluida' : 'Revisiones incluidas'}
            </span>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-dev-hub-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full bg-accent-gold text-white py-3 px-6 rounded-lg font-semibold neu-elevated-subtle transition-all duration-300 hover:bg-accent-gold-hover hover:shadow-xl active:scale-95 shadow-lg">
        {buttonText}
      </button>
    </div>
  );
}
