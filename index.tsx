
import { GoogleGenAI } from "@google/genai";

// --- Configuration & Constants ---
const SANITY_PROJECT_ID = '0g3j5g3v';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = 'v2021-10-21';
const GENAI_MODEL = 'gemini-3-flash-preview';

// --- Global State ---
let blogPosts = [];
let isMobileMenuOpen = false;

// --- Initialization ---
const init = () => {
    // Fix: Convert number to string for textContent to resolve type error
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
    }
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
    setupGlobalEvents();
};

const setupGlobalEvents = () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (btn && menu && icon) {
        btn.addEventListener('click', () => {
            isMobileMenuOpen = !isMobileMenuOpen;
            menu.classList.toggle('hidden');
            icon.setAttribute('d', isMobileMenuOpen 
                ? 'M6 18L18 6M6 6l12 12' 
                : 'M4 6h16M4 12h16M4 18h16'
            );
        });

        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMobileMenuOpen = false;
                menu.classList.add('hidden');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }
};

// --- Router ---
const handleRoute = async () => {
    const hash = window.location.hash || '#/';
    const main = document.getElementById('main-content');
    
    if (!main) return;

    // Clear content and show loading if needed
    main.innerHTML = '';
    
    // Simple path parsing
    const parts = hash.split('/');
    const route = parts[1] || '';
    const id = parts[2] || null;

    // Update Nav active state
    document.querySelectorAll('[data-route]').forEach(link => {
        link.classList.remove('nav-link-active');
        if (link.getAttribute('data-route') === (route || 'home')) {
            link.classList.add('nav-link-active');
        }
    });

    // Move focus for accessibility
    main.setAttribute('tabindex', '-1');
    main.focus();

    switch (route) {
        case '':
            renderHome(main);
            break;
        case 'about':
            renderAbout(main);
            break;
        case 'blog':
            if (id) {
                renderPostDetail(main, id);
            } else {
                renderBlogList(main);
            }
            break;
        case 'consultation':
            renderConsultation(main);
            break;
        default:
            renderHome(main);
    }
};

// --- Views ---

const renderHome = (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-12 md:py-24 space-y-24 view-transition">
            <section class="max-w-4xl" aria-labelledby="hero-heading">
                <h1 id="hero-heading" class="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8">
                    Empowering Independence Through <span class="text-blue-700">Assistive Technology.</span>
                </h1>
                <p class="text-xl md:text-2xl text-slate-600 max-w-2xl font-medium leading-relaxed mb-10">
                    Desmond Delgadillo is an Assistive Tech Trainer specializing in digital inclusion, screen reader mastery, and accessible workflows.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="#/consultation" class="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        Get Expert Advice
                    </a>
                    <a href="#/about" class="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-bold hover:border-slate-900 transition-all">
                        My Background
                    </a>
                </div>
            </section>

            <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-blue-50/50 rounded-[2.5rem] p-8 md:p-16 border border-blue-100">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold text-slate-900">Lifelong Expertise.</h2>
                    <div class="text-slate-700 text-lg leading-relaxed space-y-4">
                        <p>I have been using assistive technology my entire life. From mastering screen readers as a child to navigating the world with braille, I have firsthand experience with the tools that empower independence.</p>
                        <p>Today, I leverage that expertise to train individuals and organizations, ensuring technology serves as a bridge rather than a barrier.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-blue-100/50 space-y-6">
                    <h3 class="text-xl font-bold text-slate-900">Professional Focus</h3>
                    <ul class="space-y-4 text-slate-700 font-medium">
                        <li class="flex items-start gap-3">
                            <span class="text-blue-600 text-xl">✔</span>
                            <span>Screen Reader Proficiency (JAWS, NVDA, VoiceOver)</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-blue-600 text-xl">✔</span>
                            <span>WCAG 2.2 Compliance & Auditing</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="text-blue-600 text-xl">✔</span>
                            <span>Inclusive UX Design Strategy</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    `;
};

const renderAbout = (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-12 md:py-20 view-transition max-w-4xl mx-auto">
            <header class="mb-16">
                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Biography & Credentials</h1>
                <p class="text-xl text-slate-600 leading-relaxed">
                    Driven by personal experience and a passion for technology, I've spent the last decade closing the gap between high-end software and those who use it with specialized tools.
                </p>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div class="md:col-span-2 space-y-12">
                    <section>
                        <h2 class="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">My Journey</h2>
                        <div class="text-slate-700 text-lg space-y-6 leading-relaxed">
                            <p>My name is Desmond Delgadillo, and I am an Assistive Technology Trainer based in Southern California. My interest in technology began early, but it was my transition into professional settings that revealed how much work was still needed in digital inclusion.</p>
                            <p>After obtaining my certification from California State University, Northridge (CSUN), I began working directly with vocational rehabilitation agencies to help blind and low-vision clients return to work with confidence.</p>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-2xl font-bold text-slate-900 mb-8 border-b-2 border-slate-100 pb-2">Professional Experience</h2>
                        <div class="space-y-8">
                            <div class="flex gap-6">
                                <div class="w-1 bg-blue-600 rounded-full flex-shrink-0"></div>
                                <div>
                                    <h3 class="font-bold text-slate-900 text-lg">Lead Trainer, Visionary Tech Solutions</h3>
                                    <p class="text-sm font-bold text-blue-600 mb-2">2020 - Present</p>
                                    <p class="text-slate-600 leading-relaxed">Managing curriculum development for national training programs focusing on screen reader integration with modern CRM platforms.</p>
                                </div>
                            </div>
                            <div class="flex gap-6">
                                <div class="w-1 bg-slate-300 rounded-full flex-shrink-0"></div>
                                <div>
                                    <h3 class="font-bold text-slate-900 text-lg">Accessibility Consultant, FinTech Collective</h3>
                                    <p class="text-sm font-bold text-slate-400 mb-2">2018 - 2020</p>
                                    <p class="text-slate-600 leading-relaxed">Audited customer-facing banking applications to ensure compliance with ADA standards and improved user flows for VoiceOver users.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <aside class="space-y-10">
                    <div class="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                        <h3 class="text-lg font-bold text-slate-900 mb-6">Certifications</h3>
                        <ul class="space-y-4">
                            <li class="flex gap-3 items-start text-sm">
                                <span class="bg-white p-1 rounded border border-slate-200 shadow-sm">📜</span>
                                <span class="font-medium text-slate-700">CATIS (Assistive Tech Specialist)</span>
                            </li>
                            <li class="flex gap-3 items-start text-sm">
                                <span class="bg-white p-1 rounded border border-slate-200 shadow-sm">📜</span>
                                <span class="font-medium text-slate-700">DHS Trusted Tester</span>
                            </li>
                            <li class="flex gap-3 items-start text-sm">
                                <span class="bg-white p-1 rounded border border-slate-200 shadow-sm">📜</span>
                                <span class="font-medium text-slate-700">IAAP WAS Certification</span>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    `;
};

const renderBlogList = async (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-12 view-transition max-w-4xl mx-auto">
            <header class="mb-12">
                <h1 class="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Perspective on Accessibility</h1>
                <p class="text-lg text-slate-600 max-w-2xl">Sharing insights, news, and tutorials on the intersection of disability and digital technology.</p>
                <div class="mt-8 relative max-w-md">
                    <input id="blog-search" type="text" placeholder="Search posts..." class="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all shadow-sm">
                </div>
            </header>
            <div id="posts-container" class="grid grid-cols-1 gap-12">
                <div class="py-12 text-center text-slate-500 animate-pulse">Fetching the latest perspective...</div>
            </div>
        </div>
    `;

    const searchInput = document.getElementById('blog-search') as HTMLInputElement;
    const postsContainer = document.getElementById('posts-container');

    const posts = await fetchPosts();
    if (postsContainer) {
        renderPosts(posts, postsContainer);
    }

    if (searchInput && postsContainer) {
        searchInput.addEventListener('input', (e) => {
            const term = (e.target as HTMLInputElement).value.toLowerCase();
            const filtered = posts.filter(p => 
                p.title?.toLowerCase().includes(term) || 
                p.excerpt?.toLowerCase().includes(term)
            );
            renderPosts(filtered, postsContainer);
        });
    }
};

const renderPostDetail = async (container: HTMLElement, id: string) => {
    container.innerHTML = `<div class="py-20 text-center text-slate-400">Loading full article...</div>`;
    
    const query = `*[_type == "post" && _id == "${id}"][0] { _id, title, date, excerpt, content }`;
    const post = await fetchFromSanity(query);

    if (!post) {
        container.innerHTML = `<div class="py-20 text-center"><h2 class="text-2xl font-bold mb-4">Post not found</h2><a href="#/blog" class="text-blue-600">Back to Blog</a></div>`;
        return;
    }

    container.innerHTML = `
        <article class="max-w-3xl mx-auto py-12 view-transition">
            <a href="#/blog" class="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-10 transition-colors group">
                <svg class="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Back to Perspectives
            </a>
            <header class="mb-12">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">D</div>
                    <div>
                        <p class="text-sm font-bold text-slate-900">Desmond Delgadillo</p>
                        <p class="text-xs text-slate-500">${formatDate(post.date)}</p>
                    </div>
                </div>
                <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">${post.title}</h1>
            </header>
            <div class="content-prose">
                ${post.content || '<p>Content is arriving shortly...</p>'}
            </div>
            <footer class="mt-20 pt-10 border-t border-slate-100">
                <div class="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
                    <div class="flex-1">
                        <h3 class="text-2xl font-bold mb-3">Found this helpful?</h3>
                        <p class="text-blue-100 text-lg opacity-90">I offer bi-weekly workshops for developers on digital inclusive design. Join our next session!</p>
                    </div>
                    <a href="#/consultation" class="px-8 py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl">Join a Workshop</a>
                </div>
            </footer>
        </article>
    `;
};

const renderConsultation = (container: HTMLElement) => {
    container.innerHTML = `
        <div class="py-12 view-transition max-w-4xl mx-auto">
            <div class="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden mb-16 shadow-2xl">
                <div class="absolute -top-12 -right-12 opacity-5 pointer-events-none">
                    <svg class="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
                </div>
                <div class="relative z-10">
                    <h1 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Expert Guidance</h1>
                    <p class="text-xl text-slate-300 max-w-xl mb-12 leading-relaxed">
                        Need immediate advice on an accessibility challenge? Ask my AI Assistant trained on my professional philosophy.
                    </p>
                    
                    <form id="ai-form" class="space-y-6 max-w-2xl">
                        <div class="relative">
                            <label for="query" class="sr-only">Your accessibility question</label>
                            <textarea id="query" required placeholder="How do I make my navigation menu accessible for screen readers?" class="w-full h-40 px-6 py-5 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-500 text-lg"></textarea>
                        </div>
                        <button type="submit" id="submit-btn" class="px-10 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3">
                            <span>Get Advice</span>
                            <span id="loader" class="hidden animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                        </button>
                    </form>

                    <div id="ai-response-container" class="mt-10 hidden" role="status" aria-live="polite">
                        <div class="p-8 bg-slate-800/60 border border-slate-700 rounded-2xl">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Desmond's AI Assistant</span>
                            </div>
                            <div id="ai-text" class="text-slate-200 leading-relaxed text-lg whitespace-pre-wrap"></div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h2 class="text-2xl font-bold mb-4">Corporate Training</h2>
                    <p class="text-slate-600 mb-8 leading-relaxed">Equip your engineering and design teams with the skills to build inclusive products. Custom workshops tailored to your tech stack.</p>
                    <button class="w-full py-4 border-2 border-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">Request Proposal</button>
                </div>
                <div class="p-10 bg-blue-600 text-white rounded-3xl shadow-xl shadow-blue-100 hover:scale-[1.01] transition-transform">
                    <h2 class="text-2xl font-bold mb-4">One-on-One Mastery</h2>
                    <p class="text-blue-50 mb-8 leading-relaxed opacity-90">Personalized sessions for individuals looking to master specific tools like JAWS, NVDA, or complex digital workflows.</p>
                    <button class="w-full py-4 bg-white text-blue-700 rounded-xl font-bold hover:bg-blue-50 transition-all">Book Discovery Call</button>
                </div>
            </section>
        </div>
    `;

    const form = document.getElementById('ai-form');
    const responseContainer = document.getElementById('ai-response-container');
    const responseText = document.getElementById('ai-text');
    const submitBtn = document.getElementById('submit-btn');
    const loader = document.getElementById('loader');

    if (form && responseContainer && responseText && submitBtn && loader) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const query = (document.getElementById('query') as HTMLTextAreaElement).value;
            if (!query) return;

            submitBtn.setAttribute('disabled', 'true');
            loader.classList.remove('hidden');
            responseContainer.classList.remove('hidden');
            responseText.textContent = "Thinking...";

            try {
                const advice = await getAIAdvice(query);
                responseText.textContent = advice || "No advice returned.";
            } catch (err) {
                responseText.textContent = "I encountered an error. Please try again or reach out directly.";
            } finally {
                submitBtn.removeAttribute('disabled');
                loader.classList.add('hidden');
            }
        });
    }
};

// --- Services ---

const fetchPosts = async () => {
    const query = `*[_type == "post"] | order(date desc, _createdAt desc) { "id": _id, title, date, excerpt }`;
    return await fetchFromSanity(query) || [];
};

const renderPosts = (posts: any[], container: HTMLElement) => {
    if (!posts.length) {
        container.innerHTML = `<div class="py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">No matching perspectives found.</div>`;
        return;
    }

    container.innerHTML = posts.map(post => `
        <article class="group flex flex-col gap-4 items-start border-b border-slate-100 pb-12 last:border-0">
            <time datetime="${post.date}" class="text-xs font-bold text-blue-600 uppercase tracking-widest">
                ${formatDate(post.date)}
            </time>
            <div class="space-y-3">
                <a href="#/blog/${post.id}" class="block focus-ring rounded group">
                    <h2 class="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight">
                        ${post.title}
                    </h2>
                </a>
                <p class="text-slate-600 leading-relaxed text-lg line-clamp-2">${post.excerpt || ''}</p>
            </div>
            <a href="#/blog/${post.id}" class="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group">
                Read Article
                <svg class="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
        </article>
    `).join('');
};

const fetchFromSanity = async (query: string) => {
    const encoded = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encoded}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result.result;
    } catch (error) {
        console.error("Sanity Error:", error);
        return null;
    }
};

const getAIAdvice = async (query: string) => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
        const response = await ai.models.generateContent({
            model: GENAI_MODEL,
            contents: `You are Desmond Delgadillo, an expert Assistive Technology Trainer. Provide professional, empathetic, and expert advice for this accessibility question: "${query}". Keep the tone encouraging and solutions-oriented.`,
        });
        return response.text;
    } catch (error) {
        console.error("Gemini Error:", error);
        throw error;
    }
};

// --- Helpers ---

const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? dateStr : date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Start the app
init();
