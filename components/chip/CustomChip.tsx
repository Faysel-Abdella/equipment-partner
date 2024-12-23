import React from 'react';

interface ChipProps {
  content: React.ReactNode; // Text or any React element for the chip content
  icon?: React.ReactNode; // Optional icon to be displayed
  iconPosition?: 'leading' | 'middle' | 'trailing'; // Icon placement
  className?: string; // Additional Tailwind CSS classes
}

const Chip: React.FC<ChipProps> = ({
  content,
  icon,
  iconPosition = 'leading',
  className = '',
}) => {
  const defaultClasses =
    'flex items-center px-3 py-2 rounded-full w-fit bg-[#F2F3F5] text-grey-font';

  return (
    <div className={`${defaultClasses} ${className}`}>
      {iconPosition === 'leading' && icon && (
        <span className=''>{icon}</span>
      )}
      <span>{content}</span>
      {iconPosition === 'middle' && icon && (
        <span className=''>{icon}</span>
      )}
      {iconPosition === 'trailing' && icon && (
        <span className=''>{icon}</span>
      )}
    </div>
  );
};

export default Chip;
