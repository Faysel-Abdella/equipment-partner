import { ChevronRight } from '@/components/icons';
import { CustomCheck } from './CustomCheckbox';
interface CustomCheckboxProps {
  id: string;
  label: string | React.ReactNode;
  onClick?: () => void;
  required?: boolean;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  next?: boolean;
  size?: string;
}

export default function CustomCheckbox({
  id,
  label,
  checked,
  onCheckedChange,
  next,
  size,
}: CustomCheckboxProps) {
  return (
    <div
      className='flex items-center justify-between cursor-pointer'
      onClick={(e) => {
        e.stopPropagation();
        onCheckedChange(!checked);
      }}
    >
      <div className='flex items-center gap-[10px]'>
        <CustomCheck
          isSelected={checked}
          onChange={onCheckedChange}
          backgroundColor='#255DF9'
          width= {`w-[${size}px]`}
          height={`h-[${size}px]`}
        />
        <label
          htmlFor={id}
          className='font-pretendardRegular text-grey-font cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
        </label>
      </div>
      {next && <ChevronRight className='h-4 w-4 bg-white' fillColor='white' />}
    </div>
  );
}
