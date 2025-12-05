import React from 'react';
import womenswear from '../assets/womenswear.png';
import menswear from '../assets/mens-wear.jpg';
import kidswear from '../assets/kidswear.png';

const categories = [
    {
        id: '1', title: "Women's Wear", img: womenswear
    },
    {
        id: '2', title: "Men's Wear", img: menswear
    },
    {
        id: '3', title: "Kid's Wear", img: kidswear
    }
];


export default function FeaturedCategories() {
    return (
        <section id="featured" className="mt-10 max-w-6xl mx-auto px-6">
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {categories.map(c => (
                    <a key={c.id} href={`/category/${c.id}`} className='group block rounded-xl overflow-hidden relative'>
                        <img src={c.img} alt={c.title} className='w-full h-40 object-contain group-hover:scale-105 transition-transform' />
                        <div className='absolute inset-0 bg-black/20 flex items-end p-4'>
                            <h3 className='text-white text-lg font-semibold'>{c.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
