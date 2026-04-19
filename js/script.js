// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    postsPerPage: 9,
    currentPage: 1,
    currentFilter: 'all',
    searchTerm: ''
};

// ============================================
// BLOG POSTS DATA
// ============================================
const blogPosts = [
    {
        id: 1,
        title: 'Getting Started with Web Development',
        excerpt: 'Learn the fundamentals of HTML, CSS, and JavaScript to begin your web development journey.',
        content: 'Full content of the article...',
        category: 'technology',
        author: {
            name: 'John Doe',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-15',
        image: 'https://via.placeholder.com/400x250?text=Web+Development',
        featured: true,
        readingTime: '5 min read',
        tags: ['web', 'development', 'beginners']
    },
    {
        id: 2,
        title: 'React Best Practices',
        excerpt: 'Discover the best practices for writing clean and efficient React code.',
        content: 'Full content of the article...',
        category: 'technology',
        author: {
            name: 'Jane Smith',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-12',
        image: 'https://via.placeholder.com/400x250?text=React',
        featured: false,
        readingTime: '8 min read',
        tags: ['react', 'javascript', 'frontend']
    },
    {
        id: 3,
        title: 'Healthy Eating Habits',
        excerpt: 'Simple tips to improve your diet and maintain a healthy lifestyle.',
        content: 'Full content of the article...',
        category: 'lifestyle',
        author: {
            name: 'Mike Johnson',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-10',
        image: 'https://via.placeholder.com/400x250?text=Health',
        featured: false,
        readingTime: '6 min read',
        tags: ['health', 'nutrition', 'lifestyle']
    },
    {
        id: 4,
        title: 'Traveling on a Budget',
        excerpt: 'Expert tips on how to travel the world without breaking the bank.',
        content: 'Full content of the article...',
        category: 'travel',
        author: {
            name: 'Sarah Lee',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-08',
        image: 'https://via.placeholder.com/400x250?text=Travel',
        featured: false,
        readingTime: '7 min read',
        tags: ['travel', 'budget', 'adventure']
    },
    {
        id: 5,
        title: 'SEO Optimization Tips',
        excerpt: 'Improve your website\'s search engine ranking with these proven strategies.',
        content: 'Full content of the article...',
        category: 'technology',
        author: {
            name: 'John Doe',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-05',
        image: 'https://via.placeholder.com/400x250?text=SEO',
        featured: false,
        readingTime: '9 min read',
        tags: ['seo', 'marketing', 'optimization']
    },
    {
        id: 6,
        title: 'Mindfulness and Meditation',
        excerpt: 'Reduce stress and improve mental health through mindfulness practices.',
        content: 'Full content of the article...',
        category: 'lifestyle',
        author: {
            name: 'Emma Wilson',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-03',
        image: 'https://via.placeholder.com/400x250?text=Mindfulness',
        featured: false,
        readingTime: '5 min read',
        tags: ['mindfulness', 'wellness', 'meditation']
    },
    {
        id: 7,
        title: 'Backend Development with Node.js',
        excerpt: 'Build scalable backend applications using Node.js and Express.',
        content: 'Full content of the article...',
        category: 'technology',
        author: {
            name: 'Tom Brady',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-04-01',
        image: 'https://via.placeholder.com/400x250?text=Node.js',
        featured: false,
        readingTime: '10 min read',
        tags: ['nodejs', 'backend', 'javascript']
    },
    {
        id: 8,
        title: 'European Adventure Guide',
        excerpt: 'Complete guide to exploring Europe\'s most beautiful destinations.',
        content: 'Full content of the article...',
        category: 'travel',
        author: {
            name: 'Lisa Garcia',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-03-30',
        image: 'https://via.placeholder.com/400x250?text=Europe',
        featured: false,
        readingTime: '12 min read',
        tags: ['europe', 'travel', 'guide']
    },
    {
        id: 9,
        title: 'Fitness Routine for Beginners',
        excerpt: 'Start your fitness journey with this beginner-friendly workout routine.',
        content: 'Full content of the article...',
        category: 'lifestyle',
        author: {
            name: 'Alex Martinez',
            image: 'https://via.placeholder.com/40'
        },
        date: '2026-03-28',
        image: 'https://via.placeholder.com/400x250?text=Fitness',
        featured: false,
        readingTime: '6 min read',
        tags: ['fitness', 'exercise', 'wellness']
    }
];

// ============================================
// DOM ELEMENTS
// ============================================
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const themeBtn = document.getElementById('theme-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('.search-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const postsContainer = document.getElementById('posts-container');
const featuredPostContainer = document.getElementById('featured-post');
const popularPostsList = document.getElementById('popular-posts');
const categoriesList = document.getElementById('categories');
const newsletterForm = document.getElementById('newsletter-form');
const newsletterFormLarge = document.getElementById('newsletter-form-large');

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderFeaturedPost();
    renderBlogPosts();
    populateCategories();
    populatePopularPosts();
    setupEventListeners();
});

// ============================================
// THEME MANAGEMENT
// ============================================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '☀️';
    }
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// ============================================
// NAVIGATION
// ============================================
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navList.classList.remove('active');
    });
});

// ============================================
// FEATURED POST
// ============================================
function renderFeaturedPost() {
    const featured = blogPosts.find(post => post.featured);
    if (featured) {
        featuredPostContainer.innerHTML = `
            <img src="${featured.image}" alt="${featured.title}" loading="lazy">
            <div class="featured-post-content">
                <h4>${featured.title}</h4>
                <p>${featured.excerpt}</p>
                <div class="meta">
                    <span>${formatDate(featured.date)}</span>
                    <span>${featured.readingTime}</span>
                </div>
                <button class="cta-btn" onclick="goToPost(${featured.id})">Read More</button>
            </div>
        `;
    }
}

// ============================================
// BLOG POSTS RENDERING
// ============================================
function renderBlogPosts() {
    let filteredPosts = filterPosts();
    postsContainer.innerHTML = '';

    if (filteredPosts.length === 0) {
        postsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No posts found. Try a different search or filter.</p>';
        return;
    }

    filteredPosts.forEach(post => {
        const postCard = document.createElement('article');
        postCard.className = 'post-card';
        postCard.setAttribute('data-category', post.category);
        postCard.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
            <div class="post-content">
                <span class="post-category">${capitalizeFirst(post.category)}</span>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <div class="post-author">
                        <img src="${post.author.image}" alt="${post.author.name}">
                        <span>${post.author.name}</span>
                    </div>
                    <span class="reading-time">${post.readingTime}</span>
                </div>
            </div>
        `;
        postCard.addEventListener('click', () => goToPost(post.id));
        postsContainer.appendChild(postCard);
    });

    // Refresh Google AdSense ads
    if (window.adsbygoogle) {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

function filterPosts() {
    let filtered = blogPosts;

    if (CONFIG.currentFilter !== 'all') {
        filtered = filtered.filter(post => post.category === CONFIG.currentFilter);
    }

    if (CONFIG.searchTerm) {
        filtered = filtered.filter(post =>
            post.title.toLowerCase().includes(CONFIG.searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(CONFIG.searchTerm.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(CONFIG.searchTerm.toLowerCase()))
        );
    }

    return filtered;
}

// ============================================
// FILTER BUTTONS
// ============================================
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        CONFIG.currentFilter = button.dataset.filter;
        renderBlogPosts();
    });
});

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

function performSearch() {
    CONFIG.searchTerm = searchInput.value.trim();
    renderBlogPosts();
}

// ============================================
// POPULAR POSTS
// ============================================
function populatePopularPosts() {
    const popular = blogPosts.slice(0, 5);
    popularPostsList.innerHTML = '';

    popular.forEach(post => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = post.title;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            goToPost(post.id);
        });
        li.appendChild(a);
        popularPostsList.appendChild(li);
    });
}

// ============================================
// CATEGORIES
// ============================================
function populateCategories() {
    const categories = [...new Set(blogPosts.map(post => post.category))];
    categoriesList.innerHTML = '';

    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = capitalizeFirst(category);
        a.addEventListener('click', (e) => {
            e.preventDefault();
            CONFIG.currentFilter = category;
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === category);
            });
            renderBlogPosts();
            document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
        });
        li.appendChild(a);
        categoriesList.appendChild(li);
    });
}

// ============================================
// NEWSLETTER FORMS
// ============================================
function setupEventListeners() {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    newsletterFormLarge.addEventListener('submit', handleNewsletterSubmit);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (validateEmail(email)) {
        alert(`Thank you for subscribing with ${email}!`);
        e.target.reset();
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function goToPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        console.log('Navigating to post:', post.title);
        // In a real app, this would navigate to the full post page
        // window.location.href = `/post/${postId}`;
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// AD REFRESH (for Google AdSense)
// ============================================
function refreshAds() {
    if (window.adsbygoogle !== undefined) {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
}

// Refresh ads on page load and every 30 seconds
window.addEventListener('load', refreshAds);
setInterval(refreshAds, 30000);

// ============================================
// PERFORMANCE MONITORING
// ============================================
if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            console.log('Performance:', entry.name, entry.duration);
        }
    });

    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
}