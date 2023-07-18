import React from 'react'
import { TeamBuilder } from "../teambuilder/TeamBuilder"
import { TeamStats } from "./TeamStats"




export const Homepage = () => {
	
	return (
    <>
      <div className="d-flex flex-wrap col-lg-12">
        <div className=" col-lg-9">
					<TeamBuilder />
        </div>
        <div className="mt-5 col-lg-3">
          <TeamStats />
        </div>
      </div>
    </>
  );
}
