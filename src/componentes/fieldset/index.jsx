export function Fieldset({ children }) {
  return <fieldset className='flex flex-col gap-2 w-1/3'>{children}</fieldset>;
}

Fieldset.Input = function Input({ type = 'text', ...props }) {
  return (
    <input
      className=' bg-secundaria py-3 px-4 rounded-lg border border-texto'
      type={type}
      {...props}
    />
  );
};

Fieldset.Error = function Error({ children }) {
  if (!children) return null;

  return <span className='text-erro text-sm'>{children}</span>;
};
