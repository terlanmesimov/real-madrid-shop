import { useEffect, useState } from "react";

const RegionSelector = () => {
  const [openRegionList, setOpenRegionList] = useState(false);
  const [regionList, setRegionList] = useState([]);
  const [currentRegion, setCurrentRegion] = useState("eu");

  useEffect(() => {
    const regions = ["eu", "uk", "us", "au", "cn", "jp", "kr"];
    const updatedRegionList = regions.filter(
      (region) => region !== currentRegion
    );
    setRegionList(updatedRegionList);
  }, [currentRegion]);
  const setRegion = (e) => {
    setCurrentRegion(String(e.target.id));
  };
  return (
    <div className="region_selector">
      <span className="title">REGIÓN</span>
      <div
        className="regions"
        onClick={() => setOpenRegionList(!openRegionList)}
      >
        <span className="current_region">{currentRegion}</span>
        <span className="arrow_down"></span>
        {openRegionList && (
          <ul className="region_list">
            {regionList.map((region) => {
              return (
                <li
                  key={region}
                  id={region}
                  onClick={setRegion}
                  className="region"
                >
                  {region}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RegionSelector;
