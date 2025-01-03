'use client'
import React, { useState } from 'react';
import { Search, Database, FileText, Microscope, Book, Share2, FlaskConical, GitBranch } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/card';

export const ScientificCraftsRepository = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const researchCategories = [
    'Material Science',
    'Production Techniques',
    'Chemical Analysis',
    'Historical Methods',
    'Conservation',
    'Structural Studies',
    'Dye Analysis'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Research Focus */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Scientific Repository: Kashmir Handicrafts</h1>
          <p className="text-xl mb-8">Technical Analysis and Material Science of Traditional Crafts</p>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="search"
                placeholder="Search research papers, material analyses, or techniques..."
                className="w-full p-2 pl-10 rounded-lg text-gray-800"
              />
            </div>
            <button className="bg-blue-600 px-6 py-2 rounded-lg flex items-center gap-2">
              <Database size={20} />
              Access Database
            </button>
          </div>
        </div>
      </header>

      {/* Main Scientific Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Research Categories */}
        <nav className="mb-8">
          <ul className="flex gap-4 overflow-x-auto pb-4">
            <li>
              <button 
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'all' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-gray-200'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Research
              </button>
            </li>
            {researchCategories.map(category => (
              <li key={category}>
                <button 
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category 
                      ? 'bg-slate-900 text-white' 
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

        {/* Research Dashboard */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Latest Research Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-bold">Material Composition Analysis: Pashmina Fibers</h3>
                  <p className="text-gray-600">Recent electron microscopy studies reveal unique structural properties</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Material Science</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Peer Reviewed</span>
                  </div>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-lg font-bold">Spectroscopic Analysis of Traditional Dyes</h3>
                  <p className="text-gray-600">Chemical fingerprinting of historical textile specimens</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Chemical Analysis</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">In Progress</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Published Papers</span>
                    <span className="font-bold">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Studies</span>
                    <span className="font-bold">42</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contributing Labs</span>
                    <span className="font-bold">28</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Visualization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <GitBranch size={32} className="text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research Tools Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Microscope size={24} className="mb-4 text-slate-900" />
              <h3 className="text-lg font-bold mb-2">Analysis Tools</h3>
              <p className="text-gray-600">Scientific instruments and methodologies database</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <FlaskConical size={24} className="mb-4 text-slate-900" />
              <h3 className="text-lg font-bold mb-2">Material Database</h3>
              <p className="text-gray-600">Comprehensive material composition records</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Share2 size={24} className="mb-4 text-slate-900" />
              <h3 className="text-lg font-bold mb-2">Research Network</h3>
              <p className="text-gray-600">Collaborative research platform and data sharing</p>
            </CardContent>
          </Card>
        </section>

        {/* Research Papers Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="flex">
                <div className="p-4 flex-1">
                  <p className="text-sm text-gray-500 mb-2">DOI: 10.1234/sample.{item}</p>
                  <h3 className="font-bold mb-2">Technical Analysis of Traditional Kashmir Craft Techniques ({item})</h3>
                  <p className="text-sm text-gray-600 mb-3">Authors: Sample Author et al.</p>
                  <div className="flex gap-2">
                    <button className="text-blue-600 text-sm flex items-center gap-1">
                      <FileText size={16} />
                      PDF
                    </button>
                    <button className="text-blue-600 text-sm flex items-center gap-1">
                      <Database size={16} />
                      Dataset
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer with Academic Focus */}
      <footer className="bg-gray-100 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Research</h4>
              <ul className="space-y-2">
                <li>Methodology</li>
                <li>Publications</li>
                <li>Data Sets</li>
                <li>Citations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Technical Documentation</li>
                <li>Analysis Tools</li>
                <li>Research Materials</li>
                <li>API Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Collaboration</h4>
              <ul className="space-y-2">
                <li>Research Network</li>
                <li>Lab Directory</li>
                <li>Conferences</li>
                <li>Grant Opportunities</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Institution</h4>
              <ul className="space-y-2">
                <li>About the Repository</li>
                <li>Research Ethics</li>
                <li>Data Privacy</li>
                <li>Contact Research Team</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
