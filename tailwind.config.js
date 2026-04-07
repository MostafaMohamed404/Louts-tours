tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'horizontal-spin': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'horizontal-spin': 'horizontal-spin 1s linear infinite',
      },
    }
  }
}