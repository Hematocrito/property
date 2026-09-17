import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Share2, Check } from 'lucide-react';
import { apartmentImages, galleryCategories } from '@/data/apartment';

function GalleryTile({
  img,
  onClick,
  className = '',
  cropHeightClass,
}: {
  img: { url: string; alt: string; category: string };
  onClick: () => void;
  className?: string;
  cropHeightClass?: string;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-stone-200 ${className}`}>
      <button onClick={onClick} className="block w-full h-full">
        {cropHeightClass ? (
          <div className={`${cropHeightClass} overflow-hidden`}>
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={img.url}
            alt={img.alt}
            className="block w-full h-auto max-h-[640px] object-contain transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left">
          <span className="inline-block text-xs font-semibold text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-2">
            {img.category}
          </span>
          <p className="text-white text-sm font-medium line-clamp-2">{img.alt}</p>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </button>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredImages =
    activeCategory === 'Todos'
      ? apartmentImages
      : apartmentImages.filter((img) => img.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % filteredImages.length
    );
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'full') {
      const photoParam = params.get('photo');
      const idx = photoParam ? parseInt(photoParam, 10) : 0;
      if (!Number.isNaN(idx) && idx >= 0 && idx < apartmentImages.length) {
        setLightboxIndex(idx);
      }
    }
  }, []);

  const [showShareModal, setShowShareModal] = useState(false);

  const galleryUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}`
    : '';

  const copyToClipboard = (text: string): boolean => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).catch(() => {});
        return true;
      }
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  };

  const handleShareGallery = async () => {
    const shareData = {
      url: galleryUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // user cancelled or share failed — fall through to modal
      }
    }

    setShowShareModal(true);
  };

  const handleCopyLink = () => {
    const ok = copyToClipboard(galleryUrl);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-500">
            Galería de fotos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Explora Cada Rincón
          </h2>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Navega por las imágenes para conocer el lugar. Haz clic en cualquier foto para verla en pantalla completa.
          </p>
          <button
            onClick={handleShareGallery}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-semibold shadow-md hover:bg-stone-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            {copied ? <Check className="w-4 h-4 text-green-300" /> : <Share2 className="w-4 h-4" />}
            {copied ? 'Gallery link copied' : 'Share full gallery'}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredImages.length >= 3 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
              <GalleryTile
                img={filteredImages[0]}
                onClick={() => setLightboxIndex(0)}
                className="sm:col-span-2 sm:row-span-2"
              />
              <GalleryTile
                img={filteredImages[1]}
                onClick={() => setLightboxIndex(1)}
                cropHeightClass="h-48 sm:h-64"
              />
              <GalleryTile
                img={filteredImages[2]}
                onClick={() => setLightboxIndex(2)}
                cropHeightClass="h-48 sm:h-64"
              />
            </div>

            {filteredImages.length > 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredImages.slice(3).map((img, i) => (
                  <GalleryTile
                    key={`${img.url}-${i + 3}`}
                    img={img}
                    onClick={() => setLightboxIndex(i + 3)}
                    cropHeightClass="h-56"
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((img, index) => (
              <GalleryTile
                key={`${img.url}-${index}`}
                img={img}
                onClick={() => setLightboxIndex(index)}
                cropHeightClass="h-56"
              />
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleShareGallery();
            }}
            aria-label="Share gallery"
          >
            {copied ? <Check className="w-5 h-5 text-green-300" /> : <Share2 className="w-5 h-5 text-white" />}
          </button>

          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            className="absolute left-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <figure
            className="max-w-5xl w-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].url}
              alt={filteredImages[lightboxIndex].alt}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <figcaption className="mt-4 text-center">
              <span className="inline-block text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full mb-2">
                {filteredImages[lightboxIndex].category}
              </span>
              <p className="text-white/80 text-sm max-w-2xl mx-auto">
                {filteredImages[lightboxIndex].alt}
              </p>
              <p className="text-white/40 text-xs mt-2">
                {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </figcaption>
          </figure>

          <button
            className="absolute right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 z-[110] bg-stone-950/80 backdrop-blur-sm flex items-center justify-center px-6"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-stone-900">Share Gallery</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
                aria-label="Close share"
              >
                <X className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-5">
              <input
                type="text"
                readOnly
                value={galleryUrl}
                className="flex-1 px-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm focus:outline-none"
                onFocus={(e) => e.currentTarget.select()}
              />
              <button
                onClick={handleCopyLink}
                className="px-4 py-2.5 rounded-xl bg-stone-900 text-white text-sm font-semibold hover:bg-stone-800 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    Copied
                  </>
                ) : (
                  'Copy'
                )}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(galleryUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </span>
                <span className="text-xs font-medium text-stone-600">Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Take a look around this beautiful apartment.')}&url=${encodeURIComponent(galleryUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </span>
                <span className="text-xs font-medium text-stone-600">X</span>
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent('Take a look around this beautiful apartment. ' + galleryUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </span>
                <span className="text-xs font-medium text-stone-600">WhatsApp</span>
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Maison Apartment — Photo Gallery')}&body=${encodeURIComponent('Take a look around this beautiful apartment: ' + galleryUrl)}`}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-stone-50 hover:bg-stone-100 transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span className="text-xs font-medium text-stone-600">Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
