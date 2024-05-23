import React from 'react'


export default function About() {



    return (
        <div>
              
        <div className="containe mx-3 my-3"></div>
              <h2><pre> About me </pre> </h2> 
            <div className="conatiner mx-3 my-3 "></div>
            <div className="accordion accordion-flush my-3" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <strong>   Click me </strong>
                        
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> Struggling to keep track of your word count? We've got you covered! <code></code> </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <strong> Click me ? If You Clicked First one !</strong>
                        
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">HRX Word Counter is a free online tool designed to make your writing life easier. Whether you're a student working on an essay, a blogger crafting your next post, or a professional writer meeting deadlines, our word counter helps you stay on top of your word count quickly and efficiently.

                        Simply paste your text into the box, and we'll instantly provide you with the total word count, along with other helpful stats (depending on the features you offer). This can include:

                        Character count (with and without spaces)
                        Sentence count
                        Paragraph count<code></code> </div>  </div>
                                          
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <strong> Click me ? If You Clicked Second one !</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Stop wasting time counting words manually. Try Word Counter today!"<code>. Write with confidence knowing you're on track with your word count. Use Word Counter now!"</code>. Take the guesswork out of word counting. Visit Word Counter and get started!</div>
                    </div>
                    <div className="container">


                    </div>
                </div>
            </div>
        </div>
    )
}
