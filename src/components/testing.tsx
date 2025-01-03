'use client'
import React, { useState } from 'react';
import { Search, Filter, Map, Info, Book, Camera, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card';

export const KashmirCraftsRepository = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'Pashmina Shawls',
    'Carpet Weaving',
    'Wood Carving',
    'Paper Mache',
    'Crewel Embroidery',
    'Chain Stitch',
    'Metal Work'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Kashmir Handicrafts Heritage</h1>
          <p className="text-xl mb-8">Preserving centuries of artisanal excellence</p>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="search"
                placeholder="Search crafts, artisans, or techniques..."
                className="w-full p-2 pl-10 rounded-lg text-gray-800"
              />
            </div>
            <button className="bg-blue-700 px-6 py-2 rounded-lg flex items-center gap-2">
              <Filter size={20} />
              Filter
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories Navigation */}
        <nav className="mb-8">
          <ul className="flex gap-4 overflow-x-auto pb-4">
            <li>
              <button 
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Crafts
              </button>
            </li>
            {categories.map(category => (
              <li key={category}>
                <button 
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-gray-200'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Featured Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Featured Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Master Craftsmen Series</h3>
              <p className="text-gray-600">Exploring the legendary artisans keeping traditional crafts alive</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Active Artisans</span>
                    <span className="font-bold">2,450+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documented Techniques</span>
                    <span className="font-bold">180+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heritage Items</span>
                    <span className="font-bold">5,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <Map size={32} className="text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tools Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Info size={24} className="mb-4 text-blue-900" />
              <h3 className="text-lg font-bold mb-2">Documentation</h3>
              <p className="text-gray-600">Comprehensive guides on craft techniques and history</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Book size={24} className="mb-4 text-blue-900" />
              <h3 className="text-lg font-bold mb-2">Learning Resources</h3>
              <p className="text-gray-600">Educational materials for practitioners and enthusiasts</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Camera size={24} className="mb-4 text-blue-900" />
              <h3 className="text-lg font-bold mb-2">Visual Archive</h3>
              <p className="text-gray-600">High-resolution imagery and 3D scans of artifacts</p>
            </CardContent>
          </Card>
        </section>

        {/* Collection Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Browse Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item}>
                <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">Craft Item {item}</h3>
                  <p className="text-sm text-gray-600 mb-2">Traditional technique</p>
                  <button className="text-blue-900 flex items-center gap-1">
                    <Heart size={16} />
                    Save
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2">
                <li>Our Mission</li>
                <li>Team</li>
                <li>Partners</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Documentation</li>
                <li>Research Papers</li>
                <li>Educational Materials</li>
                <li>API Access</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>Artisan Network</li>
                <li>Forums</li>
                <li>Events</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
