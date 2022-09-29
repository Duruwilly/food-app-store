import React from 'react'

const Headers = ({ title }) => {
  return (
    <header className="profile text-white pt-40 pb-4 text-center text-4xl px-4">
      <p className="font-bold capitalize">{title}</p>
    </header>
  );
}

export default Headers