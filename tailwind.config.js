// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          slowBounce: {
            '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
            '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
          },
        },
        animation: {
          slowBounce: 'slowBounce 3s infinite',
        },
      },
    },
  };
  