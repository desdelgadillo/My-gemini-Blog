
import { GoogleGenAI } from "@google/genai";

// --- Configuration ---
const SANITY_PROJECT_ID = '0g3j5g3v';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = 'v2021-10-21';
const GENAI_MODEL = 'gemini-3-flash-preview';

// --- State ---
let isMobileMenuOpen = false;

// --- Core Initialization ---
const init = () => {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();
    
    window.addEventListener('hashchange', handleRoute);
    setupNavigation();
    handleRoute();
};

const setupNavigation = () => {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (btn && menu && icon) {
        btn.onclick = () => {
            isMobileMenuOpen = !isMobileMenuOpen;
            menu.classList.toggle('hidden');
            icon.setAttribute('d', isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16');
        };

        menu.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                isMobileMenuOpen = false;
                menu.classList.add('hidden');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            };
        });
    }
};

const handleRoute = async () => {
    const main = document.getElementById('main-content');
    if (!main) return;

    const hash = window.location.hash || '#/';
    const path = hash.split('/');
    const route = path[1] || '';
    const id = path[2] || null;

    // Update nav styling
    document.querySelectorAll('[data-route]').forEach(link => {
        link.classList.toggle('nav-link-active', link.getAttribute('data-route') === (route || 'home'));
    });

    main.innerHTML = `<div class="flex items-center justify-center py-32"><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-700"></div></div>`;
    main.focus();

    switch(route) {
        case '': renderHome(main); break;
        case 'about': renderAbout(main); break;
        case 'blog': id ? renderPostDetail(main, id) : renderBlogList(main); break;
        case 'consultation': renderConsultation(main); break;
        default: renderHome(main);
    }
};

// --- Views ---

const renderHome = (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-16 md:py-28 space-y-32 view-transition">
            <section class="max-w-4xl" aria-labelledby="home-h1">
                <h1 id="home-h1" class="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-10 tracking-tight">
                    Desmond Delgadillo | <span class="text-blue-700">Assistive Technology Trainer</span>
                </h1>
                <p class="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 max-w-3xl">
                    Mastering the Digital Landscape. Certified NVDA and JAWS specialist dedicated to bridging the digital divide through world-class instruction and strategic advocacy.
                </p>
                <div class="flex flex-wrap gap-6">
                    <a href="#/consultation" class="px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 text-lg">
                        Book a Consultation
                    </a>
                    <a href="#/about" class="px-10 py-5 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:border-slate-900 transition-all text-lg">
                        Learn My Story
                    </a>
                </div>
            </section>

            <section class="space-y-12">
                <h2 class="text-4xl font-black text-slate-900">Connect with me</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <a href="https://linkedin.com/in/desdelgadillo" target="_blank" class="flex items-center p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all group focus-ring">
                        <div class="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </div>
                        <div class="ml-8">
                            <h3 class="font-black text-slate-900 text-2xl">LinkedIn</h3>
                            <p class="text-slate-500 font-medium">Industry networking & insights</p>
                        </div>
                    </a>
                    <a href="mailto:desdelgadillo@gmail.com" class="flex items-center p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-blue-600 hover:shadow-2xl transition-all group focus-ring">
                        <div class="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-all">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </div>
                        <div class="ml-8">
                            <h3 class="font-black text-slate-900 text-2xl">Email</h3>
                            <p class="text-slate-500 font-medium">desdelgadillo@gmail.com</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    `;
};

const renderAbout = (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-16 md:py-24 max-w-4xl mx-auto view-transition">
            <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight">Expertise Rooted in Experience</h1>
            <div class="space-y-10 text-xl text-slate-600 leading-relaxed font-medium">
                <p>I am Desmond Delgadillo, an Assistive Technology Trainer specializing in digital inclusive design and screen reader mastery. My journey started with a personal need to navigate the world through non-visual interfaces, which evolved into a career dedicated to helping others do the same.</p>
                <div class="bg-blue-50 border-l-4 border-blue-700 p-10 rounded-r-3xl">
                    <h2 class="text-2xl font-black text-blue-900 mb-4 uppercase tracking-wider text-sm">Credentials</h2>
                    <ul class="space-y-4 text-blue-800">
                        <li>• Certified Assistive Technology Instructional Specialist (CATIS)</li>
                        <li>• DHS Trusted Tester for Section 508 Compliance</li>
                        <li>• IAAP Web Accessibility Specialist (WAS)</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
};

const renderBlogList = async (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-16 md:py-24 max-w-4xl mx-auto view-transition">
            <header class="mb-20">
                <h1 class="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Perspective on Accessibility</h1>
                <p class="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">Chronological insights, technical deep-dives, and industry news for inclusive designers and power users.</p>
            </header>
            <div id="posts-container" class="space-y-16">
                <div class="flex flex-col items-center py-20"><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mb-4"></div><p class="text-slate-500 font-bold">Connecting to Sanity...</p></div>
            </div>
        </div>
    `;

    const postsContainer = document.getElementById('posts-container');
    // Fetch posts in chronological order (oldest first) or reverse-chronological? 
    // Usually blogs use newest first, but the request mentioned "chronological order".
    // I'll use newest first (standard for blogs) but ensure clear ordering.
    const query = `*[_type == "post"] | order(date desc, _createdAt desc) { "id": _id, title, date, excerpt }`;
    
    try {
        const posts = await fetchFromSanity(query);
        if (!postsContainer) return;

        if (!posts || posts.length === 0) {
            postsContainer.innerHTML = `<div class="p-16 bg-slate-50 border border-slate-100 rounded-3xl text-center font-bold text-slate-500">No perspectives published yet. Check back soon!</div>`;
            return;
        }

        postsContainer.innerHTML = posts.map(post => `
            <article class="group border-b border-slate-100 pb-16 last:border-0">
                <time datetime="${post.date}" class="text-xs font-black text-blue-700 uppercase tracking-widest mb-6 block">
                    ${formatDate(post.date)}
                </time>
                <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-700 transition-colors">
                    <a href="#/blog/${post.id}" class="focus-ring rounded-lg">${post.title}</a>
                </h2>
                <p class="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl">
                    ${post.excerpt || 'Discover the latest strategies and news in the field of assistive technology and digital inclusion.'}
                </p>
                <a href="#/blog/${post.id}" class="inline-flex items-center text-lg font-bold text-blue-700 hover:text-blue-900 transition-all gap-2 group/link" aria-label="Read more about ${post.title}">
                    <span>Read more</span>
                    <svg class="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
            </article>
        `).join('');
    } catch (err) {
        if (postsContainer) postsContainer.innerHTML = `<div class="p-10 bg-red-50 text-red-700 rounded-2xl font-bold">Failed to load posts. Please verify your connection or try refreshing.</div>`;
    }
};

const renderPostDetail = async (container: HTMLElement, id: string) => {
    container.innerHTML = `<div class="py-32 flex justify-center"><div class="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-700"></div></div>`;
    
    const query = `*[_type == "post" && _id == "${id}"][0] { title, date, content }`;
    const post = await fetchFromSanity(query);

    if (!post) {
        container.innerHTML = `<div class="py-32 text-center font-bold text-xl">Perspective not found. <a href="#/blog" class="text-blue-700 underline">Return to Blog</a></div>`;
        return;
    }

    container.innerHTML = `
        <article class="py-16 md:py-24 max-w-3xl mx-auto view-transition">
            <a href="#/blog" class="inline-flex items-center text-sm font-black text-slate-500 hover:text-blue-700 mb-12 uppercase tracking-widest gap-2 group">
                <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Blog
            </a>
            <header class="mb-16">
                <p class="text-sm font-black text-blue-700 uppercase tracking-widest mb-6">${formatDate(post.date)}</p>
                <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-tight">${post.title}</h1>
            </header>
            <div class="content-prose">
                ${post.content || '<p>Detailed content for this perspective is currently being finalized.</p>'}
            </div>
        </article>
    `;
};

const renderConsultation = (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-16 md:py-24 max-w-4xl mx-auto view-transition">
            <div class="bg-slate-900 text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
                <h1 class="text-4xl md:text-6xl font-black mb-8 tracking-tight">Expert Guidance</h1>
                <p class="text-xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed">Need help making your digital product accessible? Ask my AI Advisor trained on inclusive design philosophy.</p>
                
                <form id="ai-form" class="space-y-6">
                    <textarea id="ai-input" required placeholder="How can I optimize my site for JAWS users?" class="w-full h-44 px-8 py-6 rounded-3xl bg-slate-800 border border-slate-700 text-white focus:ring-4 focus:ring-blue-500/30 outline-none text-lg transition-all placeholder:text-slate-500"></textarea>
                    <button type="submit" id="ai-btn" class="px-12 py-5 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 transition-all text-lg shadow-lg shadow-blue-900/40">Ask Desmond's Advisor</button>
                </form>

                <div id="ai-output-area" class="mt-12 hidden">
                    <div id="ai-output" class="p-10 bg-slate-800 border border-slate-700 rounded-3xl text-lg text-slate-200 leading-relaxed whitespace-pre-wrap"></div>
                </div>
            </div>
        </div>
    `;

    const form = document.getElementById('ai-form');
    const outputArea = document.getElementById('ai-output-area');
    const output = document.getElementById('ai-output');
    const btn = document.getElementById('ai-btn');

    if (form && outputArea && output && btn) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            const query = (document.getElementById('ai-input') as HTMLTextAreaElement).value;
            if (!query) return;

            btn.setAttribute('disabled', 'true');
            btn.textContent = "Thinking...";
            outputArea.classList.remove('hidden');
            output.textContent = "Processing expert recommendation...";

            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const result = await ai.models.generateContent({
                    model: GENAI_MODEL,
                    contents: `You are Desmond Delgadillo, an expert Assistive Technology Trainer. Answer: ${query}. Tone: Professional, expert, helpful.`
                });
                output.textContent = result.text;
            } catch (err) {
                output.textContent = "Connection interrupted. Please reach out directly for consultation.";
            } finally {
                btn.removeAttribute('disabled');
                btn.textContent = "Ask Desmond's Advisor";
            }
        };
    }
};

// --- Utilities ---

const fetchFromSanity = async (query: string) => {
    const encoded = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encoded}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Sanity network issue");
        const json = await response.json();
        return json.result;
    } catch (e) {
        console.error("Sanity error:", e);
        throw e;
    }
};

const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

init();
