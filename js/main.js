 (function(){
   'use strict';
 
   // --- Sticky nav shadow ---
   const navbar = document.getElementById('navbar');
   let lastScroll = 0;
   window.addEventListener('scroll', function(){
     const y = window.scrollY;
     if(y > 60){
       navbar.classList.add('scrolled');
     } else {
       navbar.classList.remove('scrolled');
     }
     lastScroll = y;
   }, {passive: true});
 
   // --- Mobile nav toggle ---
   const navToggle = document.getElementById('navToggle');
   const navLinks = document.getElementById('navLinks');
   if(navToggle && navLinks){
     navToggle.addEventListener('click', function(){
       navLinks.classList.toggle('open');
     });
     // Close nav on link click
     navLinks.querySelectorAll('a').forEach(function(link){
       link.addEventListener('click', function(){
         navLinks.classList.remove('open');
       });
     });
   }
 
   // --- Modal system ---
   function openModal(id){
     var overlay = document.getElementById('modal-' + id);
     if(overlay){
       overlay.classList.add('active');
       document.body.style.overflow = 'hidden';
     }
   }
 
   function closeModal(id){
     var overlay = document.getElementById('modal-' + id);
     if(overlay){
       overlay.classList.remove('active');
       document.body.style.overflow = '';
     }
   }
 
   function closeAllModals(){
     document.querySelectorAll('.modal-overlay').forEach(function(el){
       el.classList.remove('active');
     });
     document.body.style.overflow = '';
   }
 
   // Open modal on button click
   document.querySelectorAll('.view-detail').forEach(function(btn){
     btn.addEventListener('click', function(e){
       var id = this.getAttribute('data-project');
       openModal(id);
     });
   });
 
   // Close modal on X button
   document.querySelectorAll('.modal-close').forEach(function(btn){
     btn.addEventListener('click', function(e){
       e.stopPropagation();
       var id = this.getAttribute('data-modal');
       closeModal(id);
     });
   });
 
   // Close modal on overlay click
   document.querySelectorAll('.modal-overlay').forEach(function(overlay){
     overlay.addEventListener('click', function(e){
       if(e.target === this){
         closeAllModals();
       }
     });
   });
 
   // Close modal on Escape key
   document.addEventListener('keydown', function(e){
     if(e.key === 'Escape'){
       closeAllModals();
     }
   });
 
   // --- Scroll to anchor offset (for fixed nav) ---
   document.querySelectorAll('a[href^="#"]').forEach(function(a){
     a.addEventListener('click', function(e){
       var target = document.querySelector(this.getAttribute('href'));
       if(target){
         e.preventDefault();
         var offset = 70;
         var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
         window.scrollTo({top: top, behavior: 'smooth'});
       }
     });
   });
 
   // --- Intersection Observer for fade-in ---
   if('IntersectionObserver' in window){
     var observer = new IntersectionObserver(function(entries){
       entries.forEach(function(entry){
         if(entry.isIntersecting){
           entry.target.style.opacity = '1';
           entry.target.style.transform = 'translateY(0)';
         }
       });
     }, {threshold: 0.1});
 
     document.querySelectorAll('.cap-card, .project-card').forEach(function(el){
       el.style.opacity = '0';
       el.style.transform = 'translateY(24px)';
       el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
       observer.observe(el);
     });
   } else {
     // Fallback: show all
     document.querySelectorAll('.cap-card, .project-card').forEach(function(el){
       el.style.opacity = '1';
       el.style.transform = 'translateY(0)';
     });
   }
 
 })();
