import React from 'react';

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? '#5a6a77' : '#ced4da',
    };

    let dropdownStyle = {
        color: props.mode === 'dark' ? '#d3dce3' : '#3b5564',
        backgroundColor: props.mode === 'dark' ? '#2c3e50' : '#f1f1f1',
        border: '1px solid',
        borderColor: props.mode === 'dark' ? '#5a6a77' : '#ced4da',
    };

    return (
        <div className="container">
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={dropdownStyle}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit tempora inventore, corrupti provident totam perspiciatis deserunt accusamus repudiandae necessitatibus in molestias dolorum consequuntur ut hic voluptas nisi ducimus beatae numquam autem nobis expedita rem. Adipisci rem tempore repellendus nam consequuntur?
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={dropdownStyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati numquam animi autem debitis nisi corporis vitae porro, quasi repellat quas voluptates, alias, et quos ipsam sit ratione. Quas nesciunt a consequuntur incidunt quidem illo, fugit ab, repellendus ipsa quos sint.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={dropdownStyle}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt esse nulla similique aut, soluta culpa ipsa rem et natus voluptatum debitis doloribus dignissimos obcaecati dolore sit, sapiente qui nobis provident amet reprehenderit, eligendi ab nesciunt. Adipisci dolores quaerat maxime expedita.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}