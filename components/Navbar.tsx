'use client'

export const Navbar = () => {
    const navItems = [
        { name: "Skills", href:"#home" },
        { name: "Projects", href: "#features" },
        { name: "Exp", href: "#how-it-works" },
        { name: "Blog", href: "/blog" },
    ];

  return (
    <nav className='sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-md font-doto w-2xl h-15 flex items-center justify-between border border-dashed border-[#27272a]'>
        <a href="/" className="border-r border-[#27272a] border-dashed p-3 h-full w-[30%] flex items-center hover:bg-zinc-900/50 transition-colors">
            <h1 className="font-irish-grover text-xl font-black tracking-tighter md:text-2xl">404KHAI</h1>
        </a>

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
