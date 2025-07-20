import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function base(p: IconProps) {
  const { size = 20, className, ...rest } = p;
  return { size, className: `stroke-current ${className || ''}`, rest };
}

export const PlusIcon = (p: IconProps) => {
  const { size, className, rest } = base(p);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export const RefreshIcon = (p: IconProps) => {
  const { size, className, rest } = base(p);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <path d="M3 12a9 9 0 0 1 15.3-6.3L21 8M21 12a9 9 0 0 1-15.3 6.3L3 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SearchIcon = (p: IconProps) => {
  const { size, className, rest } = base(p);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <circle cx="11" cy="11" r="6" strokeWidth="2" />
      <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export const DraftIcon = (p: IconProps) => {
  const { size, className, rest } = base(p);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <path d="M5 4h9l5 5v11a0 0 0 0 1 0 0H5a0 0 0 0 1 0 0V4Z" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 4v5h5" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
};

export const PublishedIcon = (p: IconProps) => {
  const { size, className, rest } = base(p);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <path d="m5 13 4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const TagIcon = (p: IconProps) => {
  const { size, className, rest } = base(p);
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...rest}>
      <path d="M12 3 4 9v12h16V9l-8-6Z" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3" strokeWidth="2" />
    </svg>
  );
};
