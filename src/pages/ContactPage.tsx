import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock, 
  MessageCircle, 
  Navigation,
  Sparkles
} from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { t } from '../i18n/translations';
import { ACADEMY_INFO, COURSES } from '../data/academyData';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from '../components/BrandIcons';

interface ContactPageProps {
  lang: Language;
  onOpenApply: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, onOpenApply }) => {
  const strings = t[lang].contactSection;
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    course: 'Three-month course',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage(isRtl ? 'يرجى إدخال الاسم والبريد الإلكتروني.' : 'Please provide your name and email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Crew Lounge Egypt!\nMy Name: ${formData.name || 'Prospective Student'}\nProgram Inquiry: ${formData.course}\nMessage: ${formData.message || 'I would like to inquire about course dates and registration.'}`
    );
    window.open(`https://wa.me/201012159298?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* White Center Card exactly matching screencapture-crewlounge-eg-com-contact_0770df74.png */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: "Get in touch with us" matching screenshot */}
            <div className="md:col-span-5 p-8 lg:p-12 bg-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    {strings.getInTouch}
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                    {isRtl 
                      ? 'يسعدنا استقبال استفساراتك وزيارتك لمقر الأكاديمية بمدينة نصر للتعرف على قاعات التدريب والمحاكي.'
                      : 'We welcome your inquiries and visits to our academy in Nasr City to inspect our flight cabin simulator and talk to instructors.'}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Call us now */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {strings.callUsNow}
                      </p>
                      <a 
                        href={`tel:${ACADEMY_INFO.phone}`} 
                        className="text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors"
                        dir="ltr"
                      >
                        {ACADEMY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Support email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {strings.supportEmail}
                      </p>
                      <a 
                        href={`mailto:${ACADEMY_INFO.email}`} 
                        className="text-base font-bold text-slate-900 hover:text-amber-600 transition-colors break-all"
                      >
                        {ACADEMY_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Our address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#172b45] text-white flex items-center justify-center shrink-0 shadow-md">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {strings.ourAddress}
                      </p>
                      <p className="text-base font-bold text-slate-900">
                        {isRtl ? ACADEMY_INFO.addressAr : ACADEMY_INFO.address}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isRtl ? 'بجوار محطة مكرم عبيد - مدينة نصر' : 'Near Makram Ebeid - Nasr City, Cairo'}
                      </p>
                    </div>
                  </div>

                  {/* Working hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-[#172b45] flex items-center justify-center shrink-0 border border-slate-200">
                      <Clock className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        {isRtl ? 'أوقات العمل واستقبال الزوار' : 'Working Hours'}
                      </p>
                      <p className="text-sm font-semibold text-slate-800">
                        {isRtl ? ACADEMY_INFO.workingHoursAr : ACADEMY_INFO.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp button in card */}
              <div className="pt-6 space-y-4">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2.5 text-sm transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>{strings.whatsappDirect}</span>
                </button>

                {/* Social Media Connect Channels */}
                <div className="pt-2 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                    {isRtl ? 'قنواتنا الرسمية على منصات التواصل' : 'Official Social Channels'}
                  </span>
                  <div className="flex items-center justify-center gap-2.5">
                    <a
                      href={ACADEMY_INFO.socials.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ACADEMY_INFO.socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ACADEMY_INFO.socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ACADEMY_INFO.socials.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label="TikTok"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={ACADEMY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#25D366] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: "Contact us" Form matching screenshot */}
            <div className="md:col-span-7 p-8 lg:p-12 bg-white flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6">
                {strings.contactUsTitle}
              </h3>

              {isSuccess ? (
                <div className="text-center py-8 space-y-4 animate-in zoom-in-95">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {isRtl ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto">
                    {strings.successMsg}
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', phone: '', course: 'Three-month course', message: '' });
                    }}
                    className="px-6 py-2 bg-[#172b45] text-white text-xs font-bold rounded-lg mt-2"
                  >
                    {isRtl ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* Your Name (required) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      {strings.yourName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#172b45] text-sm bg-slate-50/50"
                      placeholder={isRtl ? 'اكتب اسمك هنا' : 'Enter your name'}
                    />
                  </div>

                  {/* Your Email (required) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      {strings.yourEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#172b45] text-sm bg-slate-50/50"
                      placeholder="name@example.com"
                      dir="ltr"
                    />
                  </div>

                  {/* Phone & Program Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        {strings.yourPhone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#172b45] text-sm bg-slate-50/50"
                        placeholder="01012345678"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        {strings.desiredCourse}
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#172b45] text-sm bg-white"
                      >
                        <option value="Three-month course">{isRtl ? COURSES[0].titleAr : COURSES[0].titleEn}</option>
                        <option value="One-year course">{isRtl ? COURSES[1].titleAr : COURSES[1].titleEn}</option>
                        <option value="General Inquiry">{isRtl ? 'استفسار عام عن الأكاديمية' : 'General Inquiry'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      {strings.yourMessage}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#172b45] text-sm bg-slate-50/50"
                      placeholder={isRtl ? 'اكتب تفاصيل استفسارك...' : 'Type your question or inquiry here...'}
                    ></textarea>
                  </div>

                  {/* Submit Button styled matching screenshot */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-[#7896be] hover:bg-[#172b45] text-white font-bold rounded-xl shadow transition-all duration-200 text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? strings.sendingBtn : strings.sendBtn}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Cairo / Nasr City Map Preview Section */}
        <div className="mt-12 bg-white rounded-3xl shadow-md border border-slate-200 p-6 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div>
              <h4 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>{isRtl ? 'موقع الأكاديمية على الخريطة (مدينة نصر، القاهرة)' : 'Academy Location (Nasr City, Cairo)'}</span>
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {isRtl ? ACADEMY_INFO.addressAr : ACADEMY_INFO.address}
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=17+Abou+Dawoud+Al+Zaheri+Nasr+City+Cairo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-amber-400 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors self-start"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{isRtl ? 'الاتجاهات عبر Google Maps' : 'Open in Google Maps'}</span>
            </a>
          </div>

          <div className="mt-4 rounded-2xl overflow-hidden aspect-[21/9] bg-slate-200 relative border border-slate-200">
            {/* Embedded interactive Google Map iframe */}
            <iframe
              title="Crew Lounge Egypt Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1895697330767!2d31.3464113!3d30.0617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e5c94fa25d3%3A0x7d04e4cbe064299b!2sAbou%20Dawoud%20Al%20Zaheri%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};
