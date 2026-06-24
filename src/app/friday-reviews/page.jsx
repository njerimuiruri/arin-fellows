'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { FileText, Calendar, Users, ExternalLink, Clock, BookOpen, Globe, X, ChevronDown, Search, ChevronLeft, ChevronRight, User } from 'lucide-react';
import ARINNavbar from '@/components/navbar/navbar';
import ArinFellowsFooter from '@/components/footer/footer';
import { briefs } from '../../../data/brief/brief';
import Image from 'next/image';
import Link from 'next/link';

const MONTH_ORDER = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const ITEMS_PER_PAGE = 12;

function parseDate(dateStr) {
    if (!dateStr || dateStr.trim() === '2020') return new Date('2020-01-01');
    const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/i, '$1');
    const d = new Date(cleaned);
    return isNaN(d.getTime()) ? new Date('2020-01-01') : d;
}

function FilterDropdown({ label, value, options, onChange, icon: Icon }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const isActive = value !== 'all';
    const selected = options.find(o => o.value === value);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setOpen(o => !o)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
                    }`}
            >
                {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                <span>{isActive ? selected?.label || value : label}</span>
                <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute top-full mt-2 left-0 z-50 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden min-w-[180px]">
                    <button
                        onClick={() => { onChange('all'); setOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${value === 'all' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                        {label}
                    </button>
                    <div className="border-t border-gray-100" />
                    {options.map(opt => (
                        <button
                            key={opt.value}
                            onClick={() => { onChange(opt.value); setOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${value === opt.value ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

const reviews = [
    { id: 1, title: "Clean energy access in Africa amidst the COVID-19 pandemic by Dr. Joanes Atela", date: "22nd May, 2020", month: "May", year: "2020", description: "This review focused on energy transition in East Africa Countries (EAC) and associated impacts of COVID-19 Pandemic. Studies shows that even though EAC has made progress, the region still experience key challenges including incoherent policy frameworks, low generation of power, uncoordinated partnerships and investment, and limited access to reliable and disaggregated data on energy linkage with socio-economic development.", briefLink: null, blogLink: null, category: "Energy" },
    { id: 2, title: "Partha Dasgupta Review of the Economics of Biodiversity: Interim Report", date: "15th May, 2020", month: "May", year: "2020", description: "This interim report sets out the scientific and economic concepts and frameworks underpinning the review. The scientific framework captures the link between nature, human health, and social well-being and uses the Covid-19 pandemic to help ground this.", briefLink: "#", blogLink: null, category: "Biodiversity" },
    { id: 3, title: "The Role of Community Based Organizations (CBOs) in Disaster Risk Reduction in Informal Settlements in Nairobi by Joanes Atela, Asenath Maobe and Linet Mwirigi", date: "27th November, 2020", month: "November", year: "2020", description: "The aim of this study is to establish the position of CBOs in DRR and informing policy changes in the government, and whether the presence of CBOs in the informal settlements makes life better for residents.", briefLink: null, blogLink: null, category: "Disaster Risk" },
    { id: 4, title: "Transformative Pathways to Sustainability: Learning Across Disciplines, Cultures and Contexts by Victoria Chengo et. al", date: "9th October, 2020", month: "October", year: "2020", description: "This book was put together by the 'Pathways' Transformative Knowledge Network (TKN), to which Africa Sustainability Hub (ASH) is a part. This chapter focuses on enabling sustainable access to Solar Home Systems via mobile-based payment systems.", briefLink: null, blogLink: null, category: "Sustainability" },
    { id: 5, title: "Strengthening Non-State Actors in Climate Action during Post-COVID19 State by Charles Tonui et.al", date: "2020", month: "Unknown", year: "2020", description: "This paper reviewed non-state actor driven climate actions & response to COVID-19 towards identifying synergies for post-2020 climate & post-COVID-19 period in developing countries.", briefLink: null, blogLink: null, category: "Climate Action" },
    { id: 6, title: "The role of subnational governments in promoting people-centred COVID-19 response – highlights for Africa by Charles Tonui, Joanes Atela", date: "17th April, 2020", month: "April", year: "2020", description: "The review focused on how the continent's policy setting interplays the COVID-19 experience and more specifically the role of subnational governments in promoting people-centred COVID-19 response.", briefLink: "#", blogLink: null, category: "Governance" },
    { id: 7, title: "How is COVID-19 shaping Africa's knowledge systems? by Joanes Atela and Nora Ndege", date: "8th May, 2020", month: "May", year: "2020", description: "This paper highlights some lessons that Africa can learn from the COVID-19 experience in the context of strengthening the continent's ST&I systems.", briefLink: "#", blogLink: "#", category: "Knowledge Systems" },
    { id: 8, title: "'Last Mile' Initiatives: Building Community Networks to Respond to COVID-19 in Africa by Kennedy Mbeva, Victoria Chengo, and Joanes Atela", date: "2020", month: "Unknown", year: "2020", description: "This review was on community networks as part of non-state actors who have notably played a critical role in supporting livelihoods and businesses especially the poor in Africa.", briefLink: "#", blogLink: "#", category: "Community Networks" },
    { id: 9, title: "Disaster Risk Management in the context of the COVID-19 pandemic in Africa by Nairobi Hub Multihazard team", date: "2020", month: "Unknown", year: "2020", description: "This brief provides key highlights on the current disaster risk management landscape in Africa, and the lessons that can be learnt from the COVID-19 pandemic response.", briefLink: "#", blogLink: "#", category: "Disaster Management" },
    { id: 10, title: "Lessons for Africa's Research in the face of COVID-19", date: "2020", month: "Unknown", year: "2020", description: "This paper focused on how research and researchers in Africa can contextually support COVID-19 response efforts, including the implications on the post-pandemic research landscape.", briefLink: "#", blogLink: "#", category: "Research" },
    { id: 11, title: "Policy trade-offs and synergies for low emission dairy development (LEDD) in Kenya by Joel Onyango et al", date: "2020", month: "Unknown", year: "2020", description: "This paper evaluates policy intervention trade-offs and synergies in low emission dairy development, addressing the tripod puzzle of climate sensitivity, reduced emissions, and increased productivity.", briefLink: null, blogLink: null, category: "Agriculture" },
    { id: 12, title: "Energy transitions and gender gaps in energy access by Benjamin McIntosh-Michaelis", date: "26th June, 2020", month: "June", year: "2020", description: "This research examines the interactions between gender, energy access, and transitions to green and renewable energy through a case study of Pundo Village, Kisumu County.", briefLink: null, blogLink: null, category: "Energy & Gender" },
    { id: 13, title: "Imaginaries of Energy Transformation in Kenya by Anugrah Saputra", date: "26th June, 2020", month: "June", year: "2020", description: "The aim of the research was to map out energy pathways in the country using the Q-Method to compare different opinions on the energy mix used in Kenya.", briefLink: null, blogLink: null, category: "Energy Transformation" },
    { id: 14, title: "Fire Risk Assessment: Review of the Current State and Justifying Applicable Methodology for Mukuru by Haron Akala, STEVENS Sam, David Rush, and Tom Randa", date: "28th September, 2020", month: "September", year: "2020", description: "This paper highlights the current state of research in Nairobi on Fire, the existing methodologies used and knowledge gaps therein, and justifies fire risk assessment models.", briefLink: null, blogLink: null, category: "Fire Risk" },
];

export default function FridayReviewsPage() {
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedMonth, setSelectedMonth] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Build unified list
    const allItems = useMemo(() => {
        const reviewItems = reviews.map(r => ({
            key: `r-${r.id}`,
            title: r.title,
            date: r.date,
            parsedDate: parseDate(r.date),
            month: r.month,
            year: r.year,
            category: r.category,
            description: r.description,
            image: null,
            author: null,
            type: 'review',
            briefLink: r.briefLink,
            blogLink: r.blogLink,
            detailHref: null,
            fullBriefLink: null,
        }));

        const briefItems = briefs.map(b => {
            const d = new Date(b.date);
            const month = isNaN(d.getTime()) ? 'Unknown' : MONTH_ORDER[d.getMonth()];
            const year = isNaN(d.getTime()) ? 'Unknown' : String(d.getFullYear());
            return {
                key: `b-${b.id}`,
                title: b.title,
                date: b.date,
                parsedDate: isNaN(d.getTime()) ? new Date('2020-01-01') : d,
                month,
                year,
                category: b.category,
                description: b.briefPreview ? b.briefPreview.replace(/<[^>]*>/g, '').slice(0, 200) : (b.shortDescription || ''),
                image: b.image || null,
                author: b.author || null,
                type: 'brief',
                briefLink: null,
                blogLink: null,
                detailHref: `/briefs/${b.id}`,
                fullBriefLink: b.fullBriefLink || null,
            };
        });

        return [...reviewItems, ...briefItems].sort((a, b) => b.parsedDate - a.parsedDate);
    }, []);

    const uniqueYears = useMemo(() => {
        return [...new Set(allItems.map(i => i.year))].filter(y => y !== 'Unknown').sort((a, b) => b.localeCompare(a));
    }, [allItems]);

    const uniqueMonths = useMemo(() => {
        return [...new Set(allItems.map(i => i.month))].filter(m => m !== 'Unknown').sort((a, b) => MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b));
    }, [allItems]);

    const uniqueCategories = useMemo(() => {
        return [...new Set(allItems.map(i => i.category))].sort();
    }, [allItems]);

    const filteredItems = useMemo(() => {
        setCurrentPage(1);
        return allItems.filter(item => {
            const yearMatch = selectedYear === 'all' || item.year === selectedYear;
            const monthMatch = selectedMonth === 'all' || item.month === selectedMonth;
            const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
            const q = searchQuery.trim().toLowerCase();
            const searchMatch = q === '' ||
                item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q) ||
                (item.author || '').toLowerCase().includes(q);
            return yearMatch && monthMatch && categoryMatch && searchMatch;
        });
    }, [selectedYear, selectedMonth, selectedCategory, searchQuery, allItems]);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const pageItems = filteredItems.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const goToPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const clearFilters = () => {
        setSelectedYear('all');
        setSelectedMonth('all');
        setSelectedCategory('all');
        setSearchQuery('');
    };

    const hasActiveFilters = selectedYear !== 'all' || selectedMonth !== 'all' || selectedCategory !== 'all' || searchQuery.trim() !== '';

    const activeChips = [
        selectedYear !== 'all' && { label: selectedYear, clear: () => setSelectedYear('all') },
        selectedMonth !== 'all' && { label: selectedMonth, clear: () => setSelectedMonth('all') },
        selectedCategory !== 'all' && { label: selectedCategory, clear: () => setSelectedCategory('all') },
        searchQuery.trim() !== '' && { label: `"${searchQuery.trim()}"`, clear: () => setSearchQuery('') },
    ].filter(Boolean);

    const categoryBadge = (category) => {
        const map = {
            'Energy': 'bg-amber-100 text-amber-800',
            'Biodiversity': 'bg-green-100 text-green-800',
            'Disaster Risk': 'bg-red-100 text-red-800',
            'Sustainability': 'bg-blue-100 text-blue-800',
            'Climate Action': 'bg-emerald-100 text-emerald-800',
            'Governance': 'bg-purple-100 text-purple-800',
            'Knowledge Systems': 'bg-indigo-100 text-indigo-800',
            'Community Networks': 'bg-cyan-100 text-cyan-800',
            'Disaster Management': 'bg-orange-100 text-orange-800',
            'Research': 'bg-teal-100 text-teal-800',
            'Agriculture': 'bg-lime-100 text-lime-800',
            'Energy & Gender': 'bg-pink-100 text-pink-800',
            'Energy Transformation': 'bg-yellow-100 text-yellow-800',
            'Fire Risk': 'bg-red-100 text-red-900',
            'Briefs': 'bg-blue-100 text-blue-800',
            'Friday Reviews': 'bg-emerald-100 text-emerald-800',
        };
        return map[category] || 'bg-gray-100 text-gray-700';
    };

    const placeholderBg = (category) => {
        const map = {
            'Energy': 'from-amber-50 to-amber-100',
            'Biodiversity': 'from-green-50 to-green-100',
            'Disaster Risk': 'from-red-50 to-red-100',
            'Sustainability': 'from-blue-50 to-blue-100',
            'Climate Action': 'from-emerald-50 to-emerald-100',
            'Governance': 'from-purple-50 to-purple-100',
            'Knowledge Systems': 'from-indigo-50 to-indigo-100',
            'Community Networks': 'from-cyan-50 to-cyan-100',
            'Disaster Management': 'from-orange-50 to-orange-100',
            'Research': 'from-teal-50 to-teal-100',
            'Briefs': 'from-blue-50 to-blue-100',
            'Friday Reviews': 'from-emerald-50 to-teal-100',
        };
        return map[category] || 'from-gray-50 to-gray-100';
    };

    return (
        <>
            <ARINNavbar />
            <div className="min-h-screen bg-gray-50">

                {/* Hero */}
                <div className="bg-white border-b border-gray-200 border-t-4 border-t-blue-600">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <p className="text-sm text-gray-400 mb-3">← Back to Home</p>
                        <h1 className="text-4xl font-bold text-blue-900 mb-2">Friday Reviews</h1>
                        <p className="text-base text-gray-500 max-w-2xl leading-relaxed">
                            Weekly and monthly research reviews, briefs, and publications from African scholars and policy makers sharing their findings and insights.
                        </p>
                        <div className="flex flex-wrap gap-5 mt-5 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-blue-500" /> {allItems.length} Publications</span>
                            <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-blue-500" /> Virtual Platform</span>
                            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-blue-500" /> African Focus</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

                    {/* Info Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl border border-gray-200 p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-2 pl-3 border-l-4 border-blue-500">About Friday Reviews</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                ARIN organizes weekly and monthly research reviews where African scholars and policy makers share their findings with reviewers and peers. The reviews are carried out virtually and provide access to peer learning on research gaps and needs.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-200 p-5">
                            <h2 className="text-sm font-semibold text-gray-900 mb-3 pl-3 border-l-4 border-blue-500">Expected Outputs</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    { icon: Clock, label: 'Weekly news briefs', color: 'text-blue-500' },
                                    { icon: FileText, label: 'Short video clips', color: 'text-indigo-500' },
                                    { icon: BookOpen, label: 'Monthly policy briefs', color: 'text-teal-500' },
                                    { icon: Users, label: 'Policy dialogues', color: 'text-purple-500' },
                                    { icon: Globe, label: 'Info repository', color: 'text-cyan-500' },
                                ].map(({ icon: Icon, label, color }) => (
                                    <div key={label} className="flex items-center gap-2 text-xs text-gray-600">
                                        <Icon className={`w-3.5 h-3.5 shrink-0 ${color}`} />
                                        {label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative flex-1 min-w-[200px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Search publications..."
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>

                            <div className="h-5 w-px bg-gray-200" />
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Filter by</span>

                            <FilterDropdown label="All Years" value={selectedYear} onChange={setSelectedYear} icon={Calendar} options={uniqueYears.map(y => ({ value: y, label: y }))} />
                            <FilterDropdown label="All Months" value={selectedMonth} onChange={setSelectedMonth} icon={Calendar} options={uniqueMonths.map(m => ({ value: m, label: m }))} />
                            <FilterDropdown label="All Topics" value={selectedCategory} onChange={setSelectedCategory} icon={FileText} options={uniqueCategories.map(c => ({ value: c, label: c }))} />

                            <div className="ml-auto flex items-center gap-3">
                                {hasActiveFilters && (
                                    <button onClick={clearFilters} className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors">
                                        Clear all
                                    </button>
                                )}
                                <span className="text-sm text-gray-500">
                                    <span className="font-semibold text-gray-800">{filteredItems.length}</span> of {allItems.length}
                                </span>
                            </div>
                        </div>

                        {activeChips.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
                                {activeChips.map(chip => (
                                    <span key={chip.label} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
                                        {chip.label}
                                        <button onClick={chip.clear}><X className="w-3 h-3" /></button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Results count */}
                    {filteredItems.length > 0 && (
                        <div className="flex items-center justify-between -mb-2">
                            <p className="text-sm text-gray-500">
                                Showing <span className="font-semibold text-gray-700">{(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredItems.length)}</span> of <span className="font-semibold text-gray-700">{filteredItems.length}</span>
                            </p>
                            <p className="text-xs text-gray-400">Latest first</p>
                        </div>
                    )}

                    {/* Unified Grid */}
                    {filteredItems.length === 0 ? (
                        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                            <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 font-medium mb-1">No results match your filters</p>
                            <p className="text-sm text-gray-400 mb-4">Try removing one of the active filters</p>
                            <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-800 font-medium underline">
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {pageItems.map((item) => (
                                    <div
                                        key={item.key}
                                        className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col"
                                    >
                                        {/* Image / Placeholder */}
                                        <div className="relative h-40 shrink-0">
                                            {item.image ? (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={400}
                                                    height={160}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className={`w-full h-full bg-gradient-to-br ${placeholderBg(item.category)} flex items-center justify-center`}>
                                                    <FileText className="w-8 h-8 text-gray-300" />
                                                </div>
                                            )}
                                            <div className="absolute top-2.5 left-2.5">
                                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${categoryBadge(item.category)}`}>
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-4 flex flex-col flex-1">
                                            <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {item.month !== 'Unknown' ? item.date : <span className="italic">Date not recorded</span>}
                                            </div>

                                            <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 mb-2">
                                                {item.title}
                                            </h3>

                                            {item.author && (
                                                <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-2">
                                                    <User className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                                    <span className="line-clamp-1">{item.author}</span>
                                                </div>
                                            )}

                                            <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                                                {item.description}
                                            </p>

                                            {/* Actions */}
                                            <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                                                {item.detailHref && (
                                                    <Link href={item.detailHref} className="flex-1">
                                                        <button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors">
                                                            Read Full Brief <ExternalLink className="w-3 h-3" />
                                                        </button>
                                                    </Link>
                                                )}
                                                {item.briefLink && (
                                                    <button
                                                        onClick={() => window.open(item.briefLink, '_blank')}
                                                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors"
                                                    >
                                                        <FileText className="w-3.5 h-3.5" /> Brief <ExternalLink className="w-3 h-3" />
                                                    </button>
                                                )}
                                                {item.blogLink && (
                                                    <button
                                                        onClick={() => window.open(item.blogLink, '_blank')}
                                                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors"
                                                    >
                                                        <BookOpen className="w-3.5 h-3.5" /> Blog <ExternalLink className="w-3 h-3" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 pt-2">
                                    <button
                                        onClick={() => goToPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4" /> Prev
                                    </button>
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                            <button
                                                key={page}
                                                onClick={() => goToPage(page)}
                                                className={`w-9 h-9 text-sm font-medium rounded-lg transition-colors ${currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => goToPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Next <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            <ArinFellowsFooter />
        </>
    );
}
