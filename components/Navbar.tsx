'use client'

export const Navbar = () => {
    const navItems = [
        { name: "Skills", href:"#home" },
        { name: "Projects", href: "#features" },
        { name: "Exp", href: "#how-it-works" },
        { name: "Blog", href: "/blog" },
    ];

  return (
    <nav className='font-doto w-2xl h-15 flex items-center justify-between border border-dashed border-[#27272a]'>
        <div className="border-r border-[#27272a] border-dashed p-3 h-full w-[30%] flex items-center">
            <h1 className="font-irish-grover text-xl font-black tracking-tighter md:text-2xl">404KHAI</h1>
        </div>

        <div className="flex w-[70%] h-full justify-around items-center">
            {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-figtree text-zinc/80 hover:text-zinc transition-colors duration-200 text-md font-medium"
                >
                  /{item.name}
                </a>
            ))}
        </div>
    </nav>
  )
}
