import React, { useState } from 'react';
import { 
  Play, 
  Image as ImageIcon, 
  Video, 
  X, 
  Maximize2, 
  Filter, 
  Sparkles 
} from 'lucide-react';
import { Language, PageId, GalleryPhoto, GalleryVideo } from '../types';
import { t } from '../i18n/translations';
import { GALLERY_PHOTOS, GALLERY_VIDEOS } from '../data/academyData';

interface GalleryPageProps {
  initialTab?: 'photos' | 'videos';
  lang: Language;
  onOpenApply: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  initialTab = 'photos',
  lang,
  onOpenApply,
}) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>(initialTab);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const strings = t[lang];
  const isRtl = lang === 'ar';

  const categories = [
    { id: 'all', labelEn: 'All Photos', labelAr: 'جميع الصور' },
    { id: 'graduation', labelEn: 'Graduations', labelAr: 'حفلات التخرج' },
    { id: 'simulator', labelEn: 'Cabin Simulator', labelAr: 'محاكي الكابينة' },
    { id: 'grooming', labelEn: 'Uniform & Grooming', labelAr: 'الزي والمظهر' },
    { id: 'safety', labelEn: 'Safety & Drills', labelAr: 'السلامة والطوارئ' },
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Banner */}
      <section className="bg-[#172b45] text-white py-14 border-b border-amber-500/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            {isRtl ? 'معرض صور وفيديوهات الأكاديمية' : 'Crew Lounge Academy Media Gallery'}
          </h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            {isRtl 
              ? 'شاهد جانباً حياً من التدريب العملي داخل أجهزة المحاكاة وحفلات تخرج دفعاتنا المتميزة.'
              : 'Explore moments from our cabin simulator sessions, safety drills, and graduation celebrations.'}
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex rounded-xl bg-slate-900/80 p-1.5 border border-slate-700 mt-2">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'photos'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>{strings.nav.photos}</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                activeTab === 'videos'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>{strings.nav.videos}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* VIDEOS TAB matching screencapture-crewlounge-eg-com-videos_9e533f2d.png */}
        {activeTab === 'videos' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  {isRtl ? 'مقاطع تدريبات ومحاكاة الطيران' : 'Aviation Training & Event Videos'}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">
                  {isRtl ? 'اضغط على أي فيديو لمشاهدة التدريب العملي' : 'Click on any video card to play the simulation walkthrough'}
                </p>
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                {GALLERY_VIDEOS.length} {isRtl ? 'مقاطع حصرية' : 'Featured Videos'}
              </span>
            </div>

            {/* Video Grid matching the 8 black cards in screencapture-crewlounge-eg-com-videos_9e533f2d.png */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative cursor-pointer bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    <img 
                      src={video.thumbnailUrl} 
                      alt={video.titleEn} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-2 end-2 bg-black/80 text-white font-mono text-[10px] px-2 py-0.5 rounded font-semibold">
                      {video.duration}
                    </span>

                    {/* Category Pill */}
                    <span className="absolute top-2 start-2 bg-[#172b45]/90 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-400/30">
                      {isRtl ? video.categoryAr : video.categoryEn}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                        {isRtl ? video.titleAr : video.titleEn}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {isRtl ? video.descriptionAr : video.descriptionEn}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-amber-600 font-semibold">
                      <span>{isRtl ? 'مشاهدة الفيديو' : 'Watch Video'}</span>
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PHOTOS TAB */}
        {activeTab === 'photos' && (
          <div className="space-y-8">
            {/* Filter buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5" />
                {isRtl ? 'التصنيف:' : 'Category:'}
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#172b45] text-amber-400 shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {isRtl ? cat.labelAr : cat.labelEn}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-slate-900 overflow-hidden relative">
                    <img 
                      src={photo.imageUrl} 
                      alt={photo.titleEn} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-white text-xs flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-amber-400" />
                        <span>{isRtl ? 'عرض الصورة بالحجم الكامل' : 'View Full Image'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {isRtl ? photo.titleAr : photo.titleEn}
                    </h4>
                    {photo.captionEn && (
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {isRtl ? photo.captionAr : photo.captionEn}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
          <div className="relative bg-slate-900 text-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-800">
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <h4 className="font-bold text-sm sm:text-base text-amber-400">
                {isRtl ? selectedVideo.titleAr : selectedVideo.titleEn}
              </h4>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${selectedVideo.videoUrl}?autoplay=1`}
                title={selectedVideo.titleEn}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-4 text-xs text-slate-300 flex items-center justify-between">
              <span>{isRtl ? selectedVideo.descriptionAr : selectedVideo.descriptionEn}</span>
              <button
                onClick={onOpenApply}
                className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg shrink-0"
              >
                {strings.nav.applyNow}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in cursor-zoom-out"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 text-white cursor-auto"
          >
            <div className="relative max-h-[75vh] bg-black flex items-center justify-center">
              <img 
                src={selectedPhoto.imageUrl} 
                alt={selectedPhoto.titleEn} 
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-slate-950">
              <h4 className="text-lg font-bold text-white mb-1">
                {isRtl ? selectedPhoto.titleAr : selectedPhoto.titleEn}
              </h4>
              <p className="text-xs text-slate-400">
                {isRtl ? selectedPhoto.captionAr : selectedPhoto.captionEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
