import { PortableText } from '@portabletext/react';

const components = {
  marks: {
    golden: ({children}) => <span className="text-yellow-500 font-semibold">{children}</span>
  }
};

export function SimplePortableText({ value }) {
  // Validación para evitar errores si el valor está vacío
  if (!value || !Array.isArray(value)) {
    return null;
  }
  
  return <PortableText value={value} components={components} />;
}

// Export por defecto para compatibilidad
export default SimplePortableText;