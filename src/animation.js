export const basicKeyFrames = {
    animate: {
        scale: [1, 1.5, 1.5, 1, 1],
        rotate: [0, 0, 360, 360, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        transition: {
            duration: 3, 
            repeat: '1',
            repeatType: "loop",
            ease: [0.25, 0.1, 0.25, 1],
        }
    }
  }

  const ease = [0.25, 0.46, 0.45, 0.94]

export const basicFadeUpProfile = {
    initial:{opacity:0, y: 80},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 3.1, 
            ease: ease,
            duration: 1.5,
        }}
}

export const basicFadeUp2Profile = {
    initial:{opacity:0, y: 5},
    animate:{opacity:1, y: 0,  
        transition: {
            delay: 3.2,
            ease: 'easeOut',
            duration: .8,
        }}
}
