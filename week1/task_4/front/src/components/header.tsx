import React from 'react';

type params = {
  name: string;
};

function Header({ name }: params) {
  return (
    <div className='fixed left-0 top-0 text-2xl border-b w-full py-2'>
      <div>

        <div>
          {name}
        </div>
      </div>

    </div>
  );
}

export default Header;