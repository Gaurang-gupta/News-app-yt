import React from 'react'
import "./Categories.css"
function Categories() {
    return (
        <section className='categories'>
            <div className='categories__headingContainer'>
                <h1 className='categories__heading'>Categories</h1>
            </div>
            <ul className='categories__list'>
                <li className='categories__listItem'>Business</li>
                <li className='categories__listItem'>Entertainment</li>
                <li className='categories__listItem'>General</li>
                <li className='categories__listItem'>Health</li>
                <li className='categories__listItem'>Science</li>
                <li className='categories__listItem'>Sports</li>
                <li className='categories__listItem'>Technology</li>
            </ul>
        </section>
    )
}

export default Categories