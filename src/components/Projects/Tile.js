import React from 'react';
import './Tile.css';
import java from './wp7250277 (1).webp';
const Tile = () => {
    return (
        <div className="row_Section1">
            <div className="col-sm-6">
                <a className="Project-box" target="_top" href="https://github.com/arthurW1935/car-rental-backend">
                    <div className="card boxx">
                        <div className="card-body">
                            <h3 className="card-title">Car Rental System Backend</h3>
                            <p className="card-text project-text">
                                This is a backend for a car rental system where you can add, delete, update cars and also book cars.
                                It is only made using springBoot and docker for the database.
                                This was a team project where I contribbuted in the services and exception handling.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6">
                <a className="Project-box" target="_top" href="https://github.com/TUSHAR1651/Yulu-Analysis">
                    <div className="card boxx">
                        <div className="card-body">
                            <h3 className="card-title">Yulu Analysis</h3>
                            <p className="card-text project-text">
                                This is a project where we did analysis on the data of Yulu bikes.
                                We used python and pandas for the analysis and visualized the data using matplotlib and seaborn.
                                We also used machine learning algorithms to predict the future of the data.
                                Also I have done the hypothesis testing on the data.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Tile;
