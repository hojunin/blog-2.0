import React from 'react';

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const BasicCard = ({ children, ...props }: Props) => {
  return (
    <div
      {...props}
      className="flex flex-1 bg-gradient-to-r from-emerald-400 to-blue-800 rounded-2xl transition-all duration-300 hover:shadow-xl"
    >
      <div className="p-4 w-full h-full bg-black rounded-2xl hover:scale-95">
        {children}
      </div>
    </div>
  );
};

export default BasicCard;
