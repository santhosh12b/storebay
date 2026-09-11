import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { helpNav } from '../data/helpNav';
import articlesData from '../data/articlesContent.json';

export default function HelpArticle() {
  const { id } = useParams();
  
  // Find the current article metadata from our nav structure
  let currentArticleMeta = null;
  for (const section of helpNav) {
    const found = section.links.find(l => l.slug === id);
    if (found) {
      currentArticleMeta = found;
      break;
    }
  }

  // Find the raw HTML content we scraped
  const rawHtmlContent = articlesData[id];

  if (!currentArticleMeta) {
    return (
      <div className="max-w-[680px] mx-auto px-[22px] py-[100px] text-center">
        <h1 className="text-[32px] font-bold text-navy mb-4">Article not found</h1>
        <p className="text-navy-soft mb-8">This help article hasn't been written yet or the link is incorrect.</p>
        <Link to="/help" className="text-orange font-medium hover:underline">&larr; Back to Help Center</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-[22px] py-[40px] md:py-[60px] flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
      
      {/* Sidebar Navigation */}
      <aside className="hidden md:block w-[280px] shrink-0 sticky top-[100px] max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar pr-4">
        <div className="mb-8">
          <Link to="/help" className="text-[14px] font-bold text-navy hover:text-orange transition-colors inline-flex items-center gap-1">
            &larr; Back to Help
          </Link>
        </div>
        
        {helpNav.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-[11px] font-bold tracking-[1.5px] uppercase text-ink-muted mb-3">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-1">
              {section.links.map((link, lIdx) => {
                const isActive = link.slug === id;
                return (
                  <li key={lIdx}>
                    <Link 
                      to={link.slug ? `/help/${link.slug}` : "#"}
                      className={`block py-1.5 px-3 -ml-3 rounded-md text-[14.5px] transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 font-semibold' 
                          : 'text-navy-soft hover:bg-bgSoft hover:text-navy'
                      } ${!link.slug && 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-navy-soft'}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 max-w-[760px]">
        {/* Mobile Back Link */}
        <Link to="/help" className="md:hidden text-[14px] text-ink-muted hover:text-navy transition-colors mb-6 inline-flex items-center gap-1">
          &larr; Back to Help
        </Link>
        
        <div className="mb-10">
          <h1 className="text-[clamp(28px,4vw,40px)] leading-[1.15] font-bold text-navy mb-4">
            {currentArticleMeta.title}
          </h1>
          <p className="text-[18px] text-navy-soft">
            {currentArticleMeta.desc}
          </p>
        </div>

        {/* Injected Scraped HTML */}
        {rawHtmlContent ? (
          <div 
            className="prose prose-lg max-w-none break-words text-[16px] text-navy-soft leading-relaxed prose-headings:text-navy prose-headings:font-bold prose-h2:text-[24px] prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-surfaceBorder prose-h2:pb-2 prose-h3:text-[18px] prose-a:text-orange prose-a:no-underline hover:prose-a:underline prose-li:my-1 prose-pre:bg-blue-50 prose-pre:text-blue-900 prose-pre:border prose-pre:border-blue-100 prose-pre:p-4 prose-pre:rounded-lg overflow-hidden"
            dangerouslySetInnerHTML={{ __html: rawHtmlContent }}
          />
        ) : (
          <div className="bg-bgSoft border border-surfaceBorder p-8 rounded-xl text-center">
            <div className="w-8 h-8 border-4 border-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-ink-muted">Loading article content...</p>
          </div>
        )}
        
        <div className="mt-16 pt-8 border-t border-surfaceBorder flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-ink-muted">Still stuck? We're here to help.</p>
          <a href="https://wa.me/" className="bg-green-500 text-white px-5 py-2.5 rounded-xl font-medium text-[14.5px] hover:bg-green-600 transition-colors shadow-sm">
            Message us on WhatsApp
          </a>
        </div>
      </main>

    </div>
  );
}
