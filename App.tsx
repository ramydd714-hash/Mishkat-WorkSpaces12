
import React, { useState, useEffect } from 'react';

const MishkatLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: "fa-couch", title: "تصميم أنيق ومريح", desc: "أثاث مريح وتصميم داخلي عصري يساعد على الاسترخاء وزيادة الإنتاجية." },
    { icon: "fa-feather", title: "أجواء هادئة", desc: "بيئة صامتة ومنظمة تساعدك على الغوص في أعماق أفكارك وإنجاز مهامك." },
    { icon: "fa-users", title: "مجتمع إبداعي", desc: "مكان يجمع المستقلين، رواد الأعمال، وصناع المحتوى لتبادل الأفكار." },
    { icon: "fa-shield-heart", title: "بيئة آمنة وداعمة", desc: "خصوصية وراحة تامة تشعرك بالدعم والترحيب في كل زيارة." },
    { icon: "fa-coffee", title: "مساحات متنوعة", desc: "نوفر لك مساحات داخلية هادئة وأخرى خارجية ملهمة لتناسب نمط عملك." },
    { icon: "fa-star", title: "تجربة استثنائية", desc: "فريق عمل ودود وجاهز دائماً لدعمك وتوفير كافة سبل الراحة لك." }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201080726009', '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 mishkat-gradient rounded-lg flex items-center justify-center text-white shadow-lg">
              <i className="fa fa-lightbulb"></i>
            </div>
            <span className="text-xl font-bold tracking-tight">مشكاة <span className="text-blue-700">MISHKAT</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-semibold text-sm">
            <a href="#about" className="hover:text-blue-600 transition-colors">عن المكان</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">المميزات</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">الموقع</a>
          </div>
          <button 
            onClick={handleWhatsAppClick}
            className="bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-blue-800 transition-all"
          >
            احجز الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
            className="w-full h-full object-cover opacity-10 scale-105"
            alt="Mishkat Ambiance"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-1 border border-blue-600 text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase bg-blue-50">
              مرحباً بك في مشكاة وورك سبيس
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900">
              حيث يزهر <span className="text-blue-700">الإبداع</span> <br />
              في هدوء أزرق
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              مشكاة هي مساحة عمل احترافية، مصممة بلمسات زرقاء هادئة لتكون وجهتك المثالية للتركيز العميق والابتكار. نوفر لك الجو الهادئ والخدمة الراقية في قلب مدينة نصر.
            </p>
            <div className="flex gap-4">
              <button onClick={handleWhatsAppClick} className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                ابدأ رحلتك معنا
              </button>
              <a href="#location" className="bg-white border-2 border-blue-100 text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center gap-2">
                <i className="fa fa-map-marker-alt"></i> زرنا اليوم
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-8 border-white">
               <img src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Workspace" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl -rotate-6 hidden lg:block border-8 border-white bg-blue-100">
               <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1974" className="w-full h-full object-cover opacity-80" alt="Meeting" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">بماذا تتألق مشكاة؟</h2>
          <p className="text-slate-500 mb-16 max-w-2xl mx-auto">كل تفصيلة في مساحتنا مصممة لتخدم طموحك وتضمن راحتك</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-transparent hover:border-blue-200 transition-all card-hover text-right">
                <div className="w-14 h-14 mishkat-gradient rounded-2xl flex items-center justify-center text-white text-xl mb-6 shadow-lg shadow-blue-200">
                  <i className={`fa ${f.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Quote */}
      <section className="py-24 mishkat-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <i className="fa fa-quote-right text-4xl opacity-50"></i>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-snug">
            "في مشكاة، السكون هو لغة الإبداع، والأزرق هو لون التركيز."
          </h2>
          <div className="h-1 w-20 bg-white/30 mx-auto"></div>
          <p className="font-bold tracking-widest text-sm uppercase">مشكاة وورك سبيس - الهدوء في أبهى صوره</p>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 text-right">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 text-slate-900">نحن في انتظارك</h2>
              <p className="text-slate-600 mb-8">ابدأ يوم عملك الجديد في بيئة تحفزك على العطاء</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-700 shrink-0">
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">العنوان الرسمي</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">29 شارع محمد فريد أبو حديد، الحديقة الدولية، مدينة نصر، القاهرة</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-700 shrink-0">
                  <i className="fa fa-clock"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">ساعات العمل</h4>
                  <p className="text-slate-600 text-sm">نستقبلك يومياً من الصباح وحتى الساعة 11:30 مساءً</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-700 shrink-0">
                  <i className="fa fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">رقم التواصل</h4>
                  <p className="text-slate-600 text-sm font-sans">+20 108 072 6009</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full md:w-auto bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:bg-blue-800 transition-all flex items-center justify-center gap-3"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                احجز مكانك عبر واتساب
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl h-[500px] relative overflow-hidden group border border-blue-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.641617304416!2d31.3323!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTknNTYuMyJF!5e0!3m2!1sen!2seg!4v1634567890123!5m2!1sen!2seg"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 rounded-[2rem]"
              loading="lazy"
              title="Mishkat Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-right">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 mishkat-gradient rounded-md flex items-center justify-center text-white">
              <i className="fa fa-lightbulb text-sm"></i>
            </div>
            <span className="font-bold tracking-tight text-slate-800">مشكاة <span className="text-blue-700">MISHKAT</span></span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Mishkat WorkSpaces. بيئة عمل ملهمة باللون الأزرق الهادئ.</p>
          <div className="flex gap-6 text-xl text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MishkatLanding;
