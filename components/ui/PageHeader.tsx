// components/ui/PageHeader.tsx
interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <p className="section-label mb-4">{label}</p>
      <h1 className="page-heading text-[#f5f0e8] mb-4">{title}</h1>
      {description && (
        <p className="text-[#a8a29e] max-w-xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </div>
    </div>
  );
}
