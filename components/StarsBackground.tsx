'use client'

// Import necessary modules from React
import React, {MutableRefObject, useEffect, useRef} from 'react'

const useComponentDidMount = () => {
   const isMounted = useRef(false)
   useEffect(() => {
      isMounted.current = true
      return () => {
         isMounted.current = false
      }
   }, [])
   return isMounted
}
type Direction = 'N' | 'S' | 'E' | 'W'
type Star = {
   x: number
   y: number
   radius: number
   direction: Direction
}
type Canvas = HTMLCanvasElement
type Context = CanvasRenderingContext2D

const StarsBackground = () => {
   const isMounted = useComponentDidMount()

   // Using React useRef to hold a reference to the canvas element
   const canvasRef = useRef() as MutableRefObject<Canvas>

   // useEffect to handle side-effects, similar to componentDidMount
   useEffect(() => {
      // Get the canvas and context for drawing
      const canvas: Canvas = canvasRef.current
      if (!canvas) return
      const ctx: Context = canvas.getContext('2d') as Context

      // Array to store star objects
      const stars: Star[] = []

      // Initialize random stars
      // Here, you can change 6 and 3 to customize the range of stars.
      const numStars = Math.floor(Math.random() * 8) + 4 // 4 to 10 stars
      for (let i = 0; i < numStars; i++) {
         const x = Math.random() * canvas.width
         const y = Math.random() * canvas.height

         // 👈 Set random direction from 'N', 'E', 'S', 'W'
         const directions: Direction[] = ['N', 'E', 'S', 'W']
         const direction: Direction = directions[Math.floor(Math.random() * directions.length)]

         // For perspective, you can change this radius range.
         const radius = Math.random() * 2 + 1 // 1 to 3 pixels
         const star: Star = {x, y, radius, direction}
         // Push each star into the array
         stars.push(star)
      }

      // Function to draw stars on the canvas
      const drawStars = () => {
         // Clear the entire canvas before redrawing
         ctx.clearRect(0, 0, canvas.width, canvas.height)

         // Customize this for a different star color.
         ctx.fillStyle = 'rgb(220,214,189)' // Gold color

         // Draw each star
         stars.forEach((star) => {
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
            ctx.fill()
         })
      }

      // Function to update stars position
      const updateStars = () => {
         // Loop through each star to update its position
         for (let star of stars) {
            switch (star.direction) {
               case 'N': // North
                  star.y -= 0.1 // Move slowly upwards
                  if (star.y < 0) star.y = canvas.height // Loop back to the bottom
                  break
               case 'E': // East
                  star.x += 0.1 // Move slowly to the right
                  if (star.x > canvas.width) star.x = 0 // Loop back to the start
                  break
               case 'S': // South
                  star.y += 0.1 // Move slowly downwards
                  if (star.y > canvas.height) star.y = 0 // Loop back to the top
                  break
               case 'W': // West
                  star.x -= 0.1 // Move slowly to the left
                  if (star.x < 0) star.x = canvas.width // Loop back to the end
                  break
               default:
                  break
            }
         }
      }

      // Function to handle animation
      const animate = () => {
         drawStars()
         updateStars()

         // Call animate recursively
         requestAnimationFrame(animate)
      }

      // Start the animation
      animate()
   }, [isMounted.current])

   if (!isMounted.current) return <></>

   // Return canvas element for rendering
   return (
      <canvas
         ref={canvasRef}
         className={'w-screen h-screen fixed top-0 left-0 '}
         width={window.innerWidth}
         height={window.innerHeight}
      ></canvas>
   )
}

// Export the StarsBackground component
export default StarsBackground
