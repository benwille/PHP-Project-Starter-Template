const cacheName = "pokemon-assets-051820-1444";
const precacheList = [
	"index.php",
	"pokedex/index.php",
	"pokedex/view.php",
	"manifest.json",
	// "css/theme.min.css",
	"js/app.js",
	"https://fonts.googleapis.com/css?family=Lato:100,300,400&display=swap",
	"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
	"images/thumbnails/001.png",
	"images/001.png",
	"images/thumbnails/002.png",
	"images/002.png",
	"images/thumbnails/003.png",
	"images/003.png",
	"images/thumbnails/004.png",
	"images/004.png",
	"images/thumbnails/005.png",
	"images/005.png",
	"images/thumbnails/006.png",
	"images/006.png",
	"images/thumbnails/007.png",
	"images/007.png",
	"images/thumbnails/008.png",
	"images/008.png",
	"images/thumbnails/009.png",
	"images/009.png",
	"images/thumbnails/010.png",
	"images/010.png",
	"images/thumbnails/011.png",
	"images/011.png",
	"images/thumbnails/012.png",
	"images/012.png",
	"images/thumbnails/013.png",
	"images/013.png",
	"images/thumbnails/014.png",
	"images/014.png",
	"images/thumbnails/015.png",
	"images/015.png",
	"images/thumbnails/016.png",
	"images/016.png",
	"images/thumbnails/017.png",
	"images/017.png",
	"images/thumbnails/018.png",
	"images/018.png",
	"images/thumbnails/019.png",
	"images/019.png",
	"images/thumbnails/020.png",
	"images/020.png",
	"images/thumbnails/021.png",
	"images/021.png",
	"images/thumbnails/022.png",
	"images/022.png",
	"images/thumbnails/023.png",
	"images/023.png",
	"images/thumbnails/024.png",
	"images/024.png",
	"images/thumbnails/025.png",
	"images/025.png",
	"images/thumbnails/026.png",
	"images/026.png",
	"images/thumbnails/027.png",
	"images/027.png",
	"images/thumbnails/028.png",
	"images/028.png",
	"images/thumbnails/029.png",
	"images/029.png",
	"images/thumbnails/030.png",
	"images/030.png",
	"images/thumbnails/031.png",
	"images/031.png",
	"images/thumbnails/032.png",
	"images/032.png",
	"images/thumbnails/033.png",
	"images/033.png",
	"images/thumbnails/034.png",
	"images/034.png",
	"images/thumbnails/035.png",
	"images/035.png",
	"images/thumbnails/036.png",
	"images/036.png",
	"images/thumbnails/037.png",
	"images/037.png",
	"images/thumbnails/038.png",
	"images/038.png",
	"images/thumbnails/039.png",
	"images/039.png",
	"images/thumbnails/040.png",
	"images/040.png",
	"images/thumbnails/041.png",
	"images/041.png",
	"images/thumbnails/042.png",
	"images/042.png",
	"images/thumbnails/043.png",
	"images/043.png",
	"images/thumbnails/044.png",
	"images/044.png",
	"images/thumbnails/045.png",
	"images/045.png",
	"images/thumbnails/046.png",
	"images/046.png",
	"images/thumbnails/047.png",
	"images/047.png",
	"images/thumbnails/048.png",
	"images/048.png",
	"images/thumbnails/049.png",
	"images/049.png",
	"images/thumbnails/050.png",
	"images/050.png",
	"images/thumbnails/051.png",
	"images/051.png",
	"images/thumbnails/052.png",
	"images/052.png",
	"images/thumbnails/053.png",
	"images/053.png",
	"images/thumbnails/054.png",
	"images/054.png",
	"images/thumbnails/055.png",
	"images/055.png",
	"images/thumbnails/056.png",
	"images/056.png",
	"images/thumbnails/057.png",
	"images/057.png",
	"images/thumbnails/058.png",
	"images/058.png",
	"images/thumbnails/059.png",
	"images/059.png",
	"images/thumbnails/060.png",
	"images/060.png",
	"images/thumbnails/061.png",
	"images/061.png",
	"images/thumbnails/062.png",
	"images/062.png",
	"images/thumbnails/063.png",
	"images/063.png",
	"images/thumbnails/064.png",
	"images/064.png",
	"images/thumbnails/065.png",
	"images/065.png",
	"images/thumbnails/066.png",
	"images/066.png",
	"images/thumbnails/067.png",
	"images/067.png",
	"images/thumbnails/068.png",
	"images/068.png",
	"images/thumbnails/069.png",
	"images/069.png",
	"images/thumbnails/070.png",
	"images/070.png",
	"images/thumbnails/071.png",
	"images/071.png",
	"images/thumbnails/072.png",
	"images/072.png",
	"images/thumbnails/073.png",
	"images/073.png",
	"images/thumbnails/074.png",
	"images/074.png",
	"images/thumbnails/075.png",
	"images/075.png",
	"images/thumbnails/076.png",
	"images/076.png",
	"images/thumbnails/077.png",
	"images/077.png",
	"images/thumbnails/078.png",
	"images/078.png",
	"images/thumbnails/079.png",
	"images/079.png",
	"images/thumbnails/080.png",
	"images/080.png",
	"images/thumbnails/081.png",
	"images/081.png",
	"images/thumbnails/082.png",
	"images/082.png",
	"images/thumbnails/083.png",
	"images/083.png",
	"images/thumbnails/084.png",
	"images/084.png",
	"images/thumbnails/085.png",
	"images/085.png",
	"images/thumbnails/086.png",
	"images/086.png",
	"images/thumbnails/087.png",
	"images/087.png",
	"images/thumbnails/088.png",
	"images/088.png",
	"images/thumbnails/089.png",
	"images/089.png",
	"images/thumbnails/090.png",
	"images/090.png",
	"images/thumbnails/091.png",
	"images/091.png",
	"images/thumbnails/092.png",
	"images/092.png",
	"images/thumbnails/093.png",
	"images/093.png",
	"images/thumbnails/094.png",
	"images/094.png",
	"images/thumbnails/095.png",
	"images/095.png",
	"images/thumbnails/096.png",
	"images/096.png",
	"images/thumbnails/097.png",
	"images/097.png",
	"images/thumbnails/098.png",
	"images/098.png",
	"images/thumbnails/099.png",
	"images/099.png",
	"images/thumbnails/100.png",
	"images/100.png",
	"images/thumbnails/101.png",
	"images/101.png",
	"images/thumbnails/102.png",
	"images/102.png",
	"images/thumbnails/103.png",
	"images/103.png",
	"images/thumbnails/104.png",
	"images/104.png",
	"images/thumbnails/105.png",
	"images/105.png",
	"images/thumbnails/106.png",
	"images/106.png",
	"images/thumbnails/107.png",
	"images/107.png",
	"images/thumbnails/108.png",
	"images/108.png",
	"images/thumbnails/109.png",
	"images/109.png",
	"images/thumbnails/110.png",
	"images/110.png",
	"images/thumbnails/111.png",
	"images/111.png",
	"images/thumbnails/112.png",
	"images/112.png",
	"images/thumbnails/113.png",
	"images/113.png",
	"images/thumbnails/114.png",
	"images/114.png",
	"images/thumbnails/115.png",
	"images/115.png",
	"images/thumbnails/116.png",
	"images/116.png",
	"images/thumbnails/117.png",
	"images/117.png",
	"images/thumbnails/118.png",
	"images/118.png",
	"images/thumbnails/119.png",
	"images/119.png",
	"images/thumbnails/120.png",
	"images/120.png",
	"images/thumbnails/121.png",
	"images/121.png",
	"images/thumbnails/122.png",
	"images/122.png",
	"images/thumbnails/123.png",
	"images/123.png",
	"images/thumbnails/124.png",
	"images/124.png",
	"images/thumbnails/125.png",
	"images/125.png",
	"images/thumbnails/126.png",
	"images/126.png",
	"images/thumbnails/127.png",
	"images/127.png",
	"images/thumbnails/128.png",
	"images/128.png",
	"images/thumbnails/129.png",
	"images/129.png",
	"images/thumbnails/130.png",
	"images/130.png",
	"images/thumbnails/131.png",
	"images/131.png",
	"images/thumbnails/132.png",
	"images/132.png",
	"images/thumbnails/133.png",
	"images/133.png",
	"images/thumbnails/134.png",
	"images/134.png",
	"images/thumbnails/135.png",
	"images/135.png",
	"images/thumbnails/136.png",
	"images/136.png",
	"images/thumbnails/137.png",
	"images/137.png",
	"images/thumbnails/138.png",
	"images/138.png",
	"images/thumbnails/139.png",
	"images/139.png",
	"images/thumbnails/140.png",
	"images/140.png",
	"images/thumbnails/141.png",
	"images/141.png",
	"images/thumbnails/142.png",
	"images/142.png",
	"images/thumbnails/143.png",
	"images/143.png",
	"images/thumbnails/144.png",
	"images/144.png",
	"images/thumbnails/145.png",
	"images/145.png",
	"images/thumbnails/146.png",
	"images/146.png",
	"images/thumbnails/147.png",
	"images/147.png",
	"images/thumbnails/148.png",
	"images/148.png",
	"images/thumbnails/149.png",
	"images/149.png",
	"images/thumbnails/150.png",
	"images/150.png",
	"images/thumbnails/151.png",
	"images/151.png",
	"images/thumbnails/152.png",
	"images/152.png",
	"images/thumbnails/153.png",
	"images/153.png",
	"images/thumbnails/154.png",
	"images/154.png",
	"images/thumbnails/155.png",
	"images/155.png",
	"images/thumbnails/156.png",
	"images/156.png",
	"images/thumbnails/157.png",
	"images/157.png",
	"images/thumbnails/158.png",
	"images/158.png",
	"images/thumbnails/159.png",
	"images/159.png",
	"images/thumbnails/160.png",
	"images/160.png",
	"images/thumbnails/161.png",
	"images/161.png",
	"images/thumbnails/162.png",
	"images/162.png",
	"images/thumbnails/163.png",
	"images/163.png",
	"images/thumbnails/164.png",
	"images/164.png",
	"images/thumbnails/165.png",
	"images/165.png",
	"images/thumbnails/166.png",
	"images/166.png",
	"images/thumbnails/167.png",
	"images/167.png",
	"images/thumbnails/168.png",
	"images/168.png",
	"images/thumbnails/169.png",
	"images/169.png",
	"images/thumbnails/170.png",
	"images/170.png",
	"images/thumbnails/171.png",
	"images/171.png",
	"images/thumbnails/172.png",
	"images/172.png",
	"images/thumbnails/173.png",
	"images/173.png",
	"images/thumbnails/174.png",
	"images/174.png",
	"images/thumbnails/175.png",
	"images/175.png",
	"images/thumbnails/176.png",
	"images/176.png",
	"images/thumbnails/177.png",
	"images/177.png",
	"images/thumbnails/178.png",
	"images/178.png",
	"images/thumbnails/179.png",
	"images/179.png",
	"images/thumbnails/180.png",
	"images/180.png",
	"images/thumbnails/181.png",
	"images/181.png",
	"images/thumbnails/182.png",
	"images/182.png",
	"images/thumbnails/183.png",
	"images/183.png",
	"images/thumbnails/184.png",
	"images/184.png",
	"images/thumbnails/185.png",
	"images/185.png",
	"images/thumbnails/186.png",
	"images/186.png",
	"images/thumbnails/187.png",
	"images/187.png",
	"images/thumbnails/188.png",
	"images/188.png",
	"images/thumbnails/189.png",
	"images/189.png",
	"images/thumbnails/190.png",
	"images/190.png",
	"images/thumbnails/191.png",
	"images/191.png",
	"images/thumbnails/192.png",
	"images/192.png",
	"images/thumbnails/193.png",
	"images/193.png",
	"images/thumbnails/194.png",
	"images/194.png",
	"images/thumbnails/195.png",
	"images/195.png",
	"images/thumbnails/196.png",
	"images/196.png",
	"images/thumbnails/197.png",
	"images/197.png",
	"images/thumbnails/198.png",
	"images/198.png",
	"images/thumbnails/199.png",
	"images/199.png",
	"images/thumbnails/200.png",
	"images/200.png",
	"images/thumbnails/201.png",
	"images/201.png",
	"images/thumbnails/202.png",
	"images/202.png",
	"images/thumbnails/203.png",
	"images/203.png",
	"images/thumbnails/204.png",
	"images/204.png",
	"images/thumbnails/205.png",
	"images/205.png",
	"images/thumbnails/206.png",
	"images/206.png",
	"images/thumbnails/207.png",
	"images/207.png",
	"images/thumbnails/208.png",
	"images/208.png",
	"images/thumbnails/209.png",
	"images/209.png",
	"images/thumbnails/210.png",
	"images/210.png",
	"images/thumbnails/211.png",
	"images/211.png",
	"images/thumbnails/212.png",
	"images/212.png",
	"images/thumbnails/213.png",
	"images/213.png",
	"images/thumbnails/214.png",
	"images/214.png",
	"images/thumbnails/215.png",
	"images/215.png",
	"images/thumbnails/216.png",
	"images/216.png",
	"images/thumbnails/217.png",
	"images/217.png",
	"images/thumbnails/218.png",
	"images/218.png",
	"images/thumbnails/219.png",
	"images/219.png",
	"images/thumbnails/220.png",
	"images/220.png",
	"images/thumbnails/221.png",
	"images/221.png",
	"images/thumbnails/222.png",
	"images/222.png",
	"images/thumbnails/223.png",
	"images/223.png",
	"images/thumbnails/224.png",
	"images/224.png",
	"images/thumbnails/225.png",
	"images/225.png",
	"images/thumbnails/226.png",
	"images/226.png",
	"images/thumbnails/227.png",
	"images/227.png",
	"images/thumbnails/228.png",
	"images/228.png",
	"images/thumbnails/229.png",
	"images/229.png",
	"images/thumbnails/230.png",
	"images/230.png",
	"images/thumbnails/231.png",
	"images/231.png",
	"images/thumbnails/232.png",
	"images/232.png",
	"images/thumbnails/233.png",
	"images/233.png",
	"images/thumbnails/234.png",
	"images/234.png",
	"images/thumbnails/235.png",
	"images/235.png",
	"images/thumbnails/236.png",
	"images/236.png",
	"images/thumbnails/237.png",
	"images/237.png",
	"images/thumbnails/238.png",
	"images/238.png",
	"images/thumbnails/239.png",
	"images/239.png",
	"images/thumbnails/240.png",
	"images/240.png",
	"images/thumbnails/241.png",
	"images/241.png",
	"images/thumbnails/242.png",
	"images/242.png",
	"images/thumbnails/243.png",
	"images/243.png",
	"images/thumbnails/244.png",
	"images/244.png",
	"images/thumbnails/245.png",
	"images/245.png",
	"images/thumbnails/246.png",
	"images/246.png",
	"images/thumbnails/247.png",
	"images/247.png",
	"images/thumbnails/248.png",
	"images/248.png",
	"images/thumbnails/249.png",
	"images/249.png",
	"images/thumbnails/250.png",
	"images/250.png",
	"images/thumbnails/251.png",
	"images/251.png",
	"images/thumbnails/252.png",
	"images/252.png",
	"images/thumbnails/253.png",
	"images/253.png",
	"images/thumbnails/254.png",
	"images/254.png",
	"images/thumbnails/255.png",
	"images/255.png",
	"images/thumbnails/256.png",
	"images/256.png",
	"images/thumbnails/257.png",
	"images/257.png",
	"images/thumbnails/258.png",
	"images/258.png",
	"images/thumbnails/259.png",
	"images/259.png",
	"images/thumbnails/260.png",
	"images/260.png",
	"images/thumbnails/261.png",
	"images/261.png",
	"images/thumbnails/262.png",
	"images/262.png",
	"images/thumbnails/263.png",
	"images/263.png",
	"images/thumbnails/264.png",
	"images/264.png",
	"images/thumbnails/265.png",
	"images/265.png",
	"images/thumbnails/266.png",
	"images/266.png",
	"images/thumbnails/267.png",
	"images/267.png",
	"images/thumbnails/268.png",
	"images/268.png",
	"images/thumbnails/269.png",
	"images/269.png",
	"images/thumbnails/270.png",
	"images/270.png",
	"images/thumbnails/271.png",
	"images/271.png",
	"images/thumbnails/272.png",
	"images/272.png",
	"images/thumbnails/273.png",
	"images/273.png",
	"images/thumbnails/274.png",
	"images/274.png",
	"images/thumbnails/275.png",
	"images/275.png",
	"images/thumbnails/276.png",
	"images/276.png",
	"images/thumbnails/277.png",
	"images/277.png",
	"images/thumbnails/278.png",
	"images/278.png",
	"images/thumbnails/279.png",
	"images/279.png",
	"images/thumbnails/280.png",
	"images/280.png",
	"images/thumbnails/281.png",
	"images/281.png",
	"images/thumbnails/282.png",
	"images/282.png",
	"images/thumbnails/283.png",
	"images/283.png",
	"images/thumbnails/284.png",
	"images/284.png",
	"images/thumbnails/285.png",
	"images/285.png",
	"images/thumbnails/286.png",
	"images/286.png",
	"images/thumbnails/287.png",
	"images/287.png",
	"images/thumbnails/288.png",
	"images/288.png",
	"images/thumbnails/289.png",
	"images/289.png",
	"images/thumbnails/290.png",
	"images/290.png",
	"images/thumbnails/291.png",
	"images/291.png",
	"images/thumbnails/292.png",
	"images/292.png",
	"images/thumbnails/293.png",
	"images/293.png",
	"images/thumbnails/294.png",
	"images/294.png",
	"images/thumbnails/295.png",
	"images/295.png",
	"images/thumbnails/296.png",
	"images/296.png",
	"images/thumbnails/297.png",
	"images/297.png",
	"images/thumbnails/298.png",
	"images/298.png",
	"images/thumbnails/299.png",
	"images/299.png",
	"images/thumbnails/300.png",
	"images/300.png",
	"images/thumbnails/301.png",
	"images/301.png",
	"images/thumbnails/302.png",
	"images/302.png",
	"images/thumbnails/303.png",
	"images/303.png",
	"images/thumbnails/304.png",
	"images/304.png",
	"images/thumbnails/305.png",
	"images/305.png",
	"images/thumbnails/306.png",
	"images/306.png",
	"images/thumbnails/307.png",
	"images/307.png",
	"images/thumbnails/308.png",
	"images/308.png",
	"images/thumbnails/309.png",
	"images/309.png",
	"images/thumbnails/310.png",
	"images/310.png",
	"images/thumbnails/311.png",
	"images/311.png",
	"images/thumbnails/312.png",
	"images/312.png",
	"images/thumbnails/313.png",
	"images/313.png",
	"images/thumbnails/314.png",
	"images/314.png",
	"images/thumbnails/315.png",
	"images/315.png",
	"images/thumbnails/316.png",
	"images/316.png",
	"images/thumbnails/317.png",
	"images/317.png",
	"images/thumbnails/318.png",
	"images/318.png",
	"images/thumbnails/319.png",
	"images/319.png",
	"images/thumbnails/320.png",
	"images/320.png",
	"images/thumbnails/321.png",
	"images/321.png",
	"images/thumbnails/322.png",
	"images/322.png",
	"images/thumbnails/323.png",
	"images/323.png",
	"images/thumbnails/324.png",
	"images/324.png",
	"images/thumbnails/325.png",
	"images/325.png",
	"images/thumbnails/326.png",
	"images/326.png",
	"images/thumbnails/327.png",
	"images/327.png",
	"images/thumbnails/328.png",
	"images/328.png",
	"images/thumbnails/329.png",
	"images/329.png",
	"images/thumbnails/330.png",
	"images/330.png",
	"images/thumbnails/331.png",
	"images/331.png",
	"images/thumbnails/332.png",
	"images/332.png",
	"images/thumbnails/333.png",
	"images/333.png",
	"images/thumbnails/334.png",
	"images/334.png",
	"images/thumbnails/335.png",
	"images/335.png",
	"images/thumbnails/336.png",
	"images/336.png",
	"images/thumbnails/337.png",
	"images/337.png",
	"images/thumbnails/338.png",
	"images/338.png",
	"images/thumbnails/339.png",
	"images/339.png",
	"images/thumbnails/340.png",
	"images/340.png",
	"images/thumbnails/341.png",
	"images/341.png",
	"images/thumbnails/342.png",
	"images/342.png",
	"images/thumbnails/343.png",
	"images/343.png",
	"images/thumbnails/344.png",
	"images/344.png",
	"images/thumbnails/345.png",
	"images/345.png",
	"images/thumbnails/346.png",
	"images/346.png",
	"images/thumbnails/347.png",
	"images/347.png",
	"images/thumbnails/348.png",
	"images/348.png",
	"images/thumbnails/349.png",
	"images/349.png",
	"images/thumbnails/350.png",
	"images/350.png",
	"images/thumbnails/351.png",
	"images/351.png",
	"images/thumbnails/352.png",
	"images/352.png",
	"images/thumbnails/353.png",
	"images/353.png",
	"images/thumbnails/354.png",
	"images/354.png",
	"images/thumbnails/355.png",
	"images/355.png",
	"images/thumbnails/356.png",
	"images/356.png",
	"images/thumbnails/357.png",
	"images/357.png",
	"images/thumbnails/358.png",
	"images/358.png",
	"images/thumbnails/359.png",
	"images/359.png",
	"images/thumbnails/360.png",
	"images/360.png",
	"images/thumbnails/361.png",
	"images/361.png",
	"images/thumbnails/362.png",
	"images/362.png",
	"images/thumbnails/363.png",
	"images/363.png",
	"images/thumbnails/364.png",
	"images/364.png",
	"images/thumbnails/365.png",
	"images/365.png",
	"images/thumbnails/366.png",
	"images/366.png",
	"images/thumbnails/367.png",
	"images/367.png",
	"images/thumbnails/368.png",
	"images/368.png",
	"images/thumbnails/369.png",
	"images/369.png",
	"images/thumbnails/370.png",
	"images/370.png",
	"images/thumbnails/371.png",
	"images/371.png",
	"images/thumbnails/372.png",
	"images/372.png",
	"images/thumbnails/373.png",
	"images/373.png",
	"images/thumbnails/374.png",
	"images/374.png",
	"images/thumbnails/375.png",
	"images/375.png",
	"images/thumbnails/376.png",
	"images/376.png",
	"images/thumbnails/377.png",
	"images/377.png",
	"images/thumbnails/378.png",
	"images/378.png",
	"images/thumbnails/379.png",
	"images/379.png",
	"images/thumbnails/380.png",
	"images/380.png",
	"images/thumbnails/381.png",
	"images/381.png",
	"images/thumbnails/382.png",
	"images/382.png",
	"images/thumbnails/383.png",
	"images/383.png",
	"images/thumbnails/384.png",
	"images/384.png",
	"images/thumbnails/385.png",
	"images/385.png",
	"images/thumbnails/386.png",
	"images/386.png",
	"images/thumbnails/387.png",
	"images/387.png",
	"images/thumbnails/388.png",
	"images/388.png",
	"images/thumbnails/389.png",
	"images/389.png",
	"images/thumbnails/390.png",
	"images/390.png",
	"images/thumbnails/391.png",
	"images/391.png",
	"images/thumbnails/392.png",
	"images/392.png",
	"images/thumbnails/393.png",
	"images/393.png",
	"images/thumbnails/394.png",
	"images/394.png",
	"images/thumbnails/395.png",
	"images/395.png",
	"images/thumbnails/396.png",
	"images/396.png",
	"images/thumbnails/397.png",
	"images/397.png",
	"images/thumbnails/398.png",
	"images/398.png",
	"images/thumbnails/399.png",
	"images/399.png",
	"images/thumbnails/400.png",
	"images/400.png",
	"images/thumbnails/401.png",
	"images/401.png",
	"images/thumbnails/402.png",
	"images/402.png",
	"images/thumbnails/403.png",
	"images/403.png",
	"images/thumbnails/404.png",
	"images/404.png",
	"images/thumbnails/405.png",
	"images/405.png",
	"images/thumbnails/406.png",
	"images/406.png",
	"images/thumbnails/407.png",
	"images/407.png",
	"images/thumbnails/408.png",
	"images/408.png",
	"images/thumbnails/409.png",
	"images/409.png",
	"images/thumbnails/410.png",
	"images/410.png",
	"images/thumbnails/411.png",
	"images/411.png",
	"images/thumbnails/412.png",
	"images/412.png",
	"images/thumbnails/413.png",
	"images/413.png",
	"images/thumbnails/414.png",
	"images/414.png",
	"images/thumbnails/415.png",
	"images/415.png",
	"images/thumbnails/416.png",
	"images/416.png",
	"images/thumbnails/417.png",
	"images/417.png",
	"images/thumbnails/418.png",
	"images/418.png",
	"images/thumbnails/419.png",
	"images/419.png",
	"images/thumbnails/420.png",
	"images/420.png",
	"images/thumbnails/421.png",
	"images/421.png",
	"images/thumbnails/422.png",
	"images/422.png",
	"images/thumbnails/423.png",
	"images/423.png",
	"images/thumbnails/424.png",
	"images/424.png",
	"images/thumbnails/425.png",
	"images/425.png",
	"images/thumbnails/426.png",
	"images/426.png",
	"images/thumbnails/427.png",
	"images/427.png",
	"images/thumbnails/428.png",
	"images/428.png",
	"images/thumbnails/429.png",
	"images/429.png",
	"images/thumbnails/430.png",
	"images/430.png",
	"images/thumbnails/431.png",
	"images/431.png",
	"images/thumbnails/432.png",
	"images/432.png",
	"images/thumbnails/433.png",
	"images/433.png",
	"images/thumbnails/434.png",
	"images/434.png",
	"images/thumbnails/435.png",
	"images/435.png",
	"images/thumbnails/436.png",
	"images/436.png",
	"images/thumbnails/437.png",
	"images/437.png",
	"images/thumbnails/438.png",
	"images/438.png",
	"images/thumbnails/439.png",
	"images/439.png",
	"images/thumbnails/440.png",
	"images/440.png",
	"images/thumbnails/441.png",
	"images/441.png",
	"images/thumbnails/442.png",
	"images/442.png",
	"images/thumbnails/443.png",
	"images/443.png",
	"images/thumbnails/444.png",
	"images/444.png",
	"images/thumbnails/445.png",
	"images/445.png",
	"images/thumbnails/446.png",
	"images/446.png",
	"images/thumbnails/447.png",
	"images/447.png",
	"images/thumbnails/448.png",
	"images/448.png",
	"images/thumbnails/449.png",
	"images/449.png",
	"images/thumbnails/450.png",
	"images/450.png",
	"images/thumbnails/451.png",
	"images/451.png",
	"images/thumbnails/452.png",
	"images/452.png",
	"images/thumbnails/453.png",
	"images/453.png",
	"images/thumbnails/454.png",
	"images/454.png",
	"images/thumbnails/455.png",
	"images/455.png",
	"images/thumbnails/456.png",
	"images/456.png",
	"images/thumbnails/457.png",
	"images/457.png",
	"images/thumbnails/458.png",
	"images/458.png",
	"images/thumbnails/459.png",
	"images/459.png",
	"images/thumbnails/460.png",
	"images/460.png",
	"images/thumbnails/461.png",
	"images/461.png",
	"images/thumbnails/462.png",
	"images/462.png",
	"images/thumbnails/463.png",
	"images/463.png",
	"images/thumbnails/464.png",
	"images/464.png",
	"images/thumbnails/465.png",
	"images/465.png",
	"images/thumbnails/466.png",
	"images/466.png",
	"images/thumbnails/467.png",
	"images/467.png",
	"images/thumbnails/468.png",
	"images/468.png",
	"images/thumbnails/469.png",
	"images/469.png",
	"images/thumbnails/470.png",
	"images/470.png",
	"images/thumbnails/471.png",
	"images/471.png",
	"images/thumbnails/472.png",
	"images/472.png",
	"images/thumbnails/473.png",
	"images/473.png",
	"images/thumbnails/474.png",
	"images/474.png",
	"images/thumbnails/475.png",
	"images/475.png",
	"images/thumbnails/476.png",
	"images/476.png",
	"images/thumbnails/477.png",
	"images/477.png",
	"images/thumbnails/478.png",
	"images/478.png",
	"images/thumbnails/479.png",
	"images/479.png",
	"images/thumbnails/480.png",
	"images/480.png",
	"images/thumbnails/481.png",
	"images/481.png",
	"images/thumbnails/482.png",
	"images/482.png",
	"images/thumbnails/483.png",
	"images/483.png",
	"images/thumbnails/484.png",
	"images/484.png",
	"images/thumbnails/485.png",
	"images/485.png",
	"images/thumbnails/486.png",
	"images/486.png",
	"images/thumbnails/487.png",
	"images/487.png",
	"images/thumbnails/488.png",
	"images/488.png",
	"images/thumbnails/489.png",
	"images/489.png",
	"images/thumbnails/490.png",
	"images/490.png",
	"images/thumbnails/491.png",
	"images/491.png",
	"images/thumbnails/492.png",
	"images/492.png",
	"images/thumbnails/493.png",
	"images/493.png",
	"images/thumbnails/494.png",
	"images/494.png",
	"images/thumbnails/495.png",
	"images/495.png",
	"images/thumbnails/496.png",
	"images/496.png",
	"images/thumbnails/497.png",
	"images/497.png",
	"images/thumbnails/498.png",
	"images/498.png",
	"images/thumbnails/499.png",
	"images/499.png",
	"images/thumbnails/500.png",
	"images/500.png",
	"images/thumbnails/501.png",
	"images/501.png",
	"images/thumbnails/502.png",
	"images/502.png",
	"images/thumbnails/503.png",
	"images/503.png",
	"images/thumbnails/504.png",
	"images/504.png",
	"images/thumbnails/505.png",
	"images/505.png",
	"images/thumbnails/506.png",
	"images/506.png",
	"images/thumbnails/507.png",
	"images/507.png",
	"images/thumbnails/508.png",
	"images/508.png",
	"images/thumbnails/509.png",
	"images/509.png",
	"images/thumbnails/510.png",
	"images/510.png",
	"images/thumbnails/511.png",
	"images/511.png",
	"images/thumbnails/512.png",
	"images/512.png",
	"images/thumbnails/513.png",
	"images/513.png",
	"images/thumbnails/514.png",
	"images/514.png",
	"images/thumbnails/515.png",
	"images/515.png",
	"images/thumbnails/516.png",
	"images/516.png",
	"images/thumbnails/517.png",
	"images/517.png",
	"images/thumbnails/518.png",
	"images/518.png",
	"images/thumbnails/519.png",
	"images/519.png",
	"images/thumbnails/520.png",
	"images/520.png",
	"images/thumbnails/521.png",
	"images/521.png",
	"images/thumbnails/522.png",
	"images/522.png",
	"images/thumbnails/523.png",
	"images/523.png",
	"images/thumbnails/524.png",
	"images/524.png",
	"images/thumbnails/525.png",
	"images/525.png",
	"images/thumbnails/526.png",
	"images/526.png",
	"images/thumbnails/527.png",
	"images/527.png",
	"images/thumbnails/528.png",
	"images/528.png",
	"images/thumbnails/529.png",
	"images/529.png",
	"images/thumbnails/530.png",
	"images/530.png",
	"images/thumbnails/531.png",
	"images/531.png",
	"images/thumbnails/532.png",
	"images/532.png",
	"images/thumbnails/533.png",
	"images/533.png",
	"images/thumbnails/534.png",
	"images/534.png",
	"images/thumbnails/535.png",
	"images/535.png",
	"images/thumbnails/536.png",
	"images/536.png",
	"images/thumbnails/537.png",
	"images/537.png",
	"images/thumbnails/538.png",
	"images/538.png",
	"images/thumbnails/539.png",
	"images/539.png",
	"images/thumbnails/540.png",
	"images/540.png",
	"images/thumbnails/541.png",
	"images/541.png",
	"images/thumbnails/542.png",
	"images/542.png",
	"images/thumbnails/543.png",
	"images/543.png",
	"images/thumbnails/544.png",
	"images/544.png",
	"images/thumbnails/545.png",
	"images/545.png",
	"images/thumbnails/546.png",
	"images/546.png",
	"images/thumbnails/547.png",
	"images/547.png",
	"images/thumbnails/548.png",
	"images/548.png",
	"images/thumbnails/549.png",
	"images/549.png",
	"images/thumbnails/550.png",
	"images/550.png",
	"images/thumbnails/551.png",
	"images/551.png",
	"images/thumbnails/552.png",
	"images/552.png",
	"images/thumbnails/553.png",
	"images/553.png",
	"images/thumbnails/554.png",
	"images/554.png",
	"images/thumbnails/555.png",
	"images/555.png",
	"images/thumbnails/556.png",
	"images/556.png",
	"images/thumbnails/557.png",
	"images/557.png",
	"images/thumbnails/558.png",
	"images/558.png",
	"images/thumbnails/559.png",
	"images/559.png",
	"images/thumbnails/560.png",
	"images/560.png",
	"images/thumbnails/561.png",
	"images/561.png",
	"images/thumbnails/562.png",
	"images/562.png",
	"images/thumbnails/563.png",
	"images/563.png",
	"images/thumbnails/564.png",
	"images/564.png",
	"images/thumbnails/565.png",
	"images/565.png",
	"images/thumbnails/566.png",
	"images/566.png",
	"images/thumbnails/567.png",
	"images/567.png",
	"images/thumbnails/568.png",
	"images/568.png",
	"images/thumbnails/569.png",
	"images/569.png",
	"images/thumbnails/570.png",
	"images/570.png",
	"images/thumbnails/571.png",
	"images/571.png",
	"images/thumbnails/572.png",
	"images/572.png",
	"images/thumbnails/573.png",
	"images/573.png",
	"images/thumbnails/574.png",
	"images/574.png",
	"images/thumbnails/575.png",
	"images/575.png",
	"images/thumbnails/576.png",
	"images/576.png",
	"images/thumbnails/577.png",
	"images/577.png",
	"images/thumbnails/578.png",
	"images/578.png",
	"images/thumbnails/579.png",
	"images/579.png",
	"images/thumbnails/580.png",
	"images/580.png",
	"images/thumbnails/581.png",
	"images/581.png",
	"images/thumbnails/582.png",
	"images/582.png",
	"images/thumbnails/583.png",
	"images/583.png",
	"images/thumbnails/584.png",
	"images/584.png",
	"images/thumbnails/585.png",
	"images/585.png",
	"images/thumbnails/586.png",
	"images/586.png",
	"images/thumbnails/587.png",
	"images/587.png",
	"images/thumbnails/588.png",
	"images/588.png",
	"images/thumbnails/589.png",
	"images/589.png",
	"images/thumbnails/590.png",
	"images/590.png",
	"images/thumbnails/591.png",
	"images/591.png",
	"images/thumbnails/592.png",
	"images/592.png",
	"images/thumbnails/593.png",
	"images/593.png",
	"images/thumbnails/594.png",
	"images/594.png",
	"images/thumbnails/595.png",
	"images/595.png",
	"images/thumbnails/596.png",
	"images/596.png",
	"images/thumbnails/597.png",
	"images/597.png",
	"images/thumbnails/598.png",
	"images/598.png",
	"images/thumbnails/599.png",
	"images/599.png",
	"images/thumbnails/600.png",
	"images/600.png",
	"images/thumbnails/601.png",
	"images/601.png",
	"images/thumbnails/602.png",
	"images/602.png",
	"images/thumbnails/603.png",
	"images/603.png",
	"images/thumbnails/604.png",
	"images/604.png",
	"images/thumbnails/605.png",
	"images/605.png",
	"images/thumbnails/606.png",
	"images/606.png",
	"images/thumbnails/607.png",
	"images/607.png",
	"images/thumbnails/608.png",
	"images/608.png",
	"images/thumbnails/609.png",
	"images/609.png",
	"images/thumbnails/610.png",
	"images/610.png",
	"images/thumbnails/611.png",
	"images/611.png",
	"images/thumbnails/612.png",
	"images/612.png",
	"images/thumbnails/613.png",
	"images/613.png",
	"images/thumbnails/614.png",
	"images/614.png",
	"images/thumbnails/615.png",
	"images/615.png",
	"images/thumbnails/616.png",
	"images/616.png",
	"images/thumbnails/617.png",
	"images/617.png",
	"images/thumbnails/618.png",
	"images/618.png",
	"images/thumbnails/619.png",
	"images/619.png",
	"images/thumbnails/620.png",
	"images/620.png",
	"images/thumbnails/621.png",
	"images/621.png",
	"images/thumbnails/622.png",
	"images/622.png",
	"images/thumbnails/623.png",
	"images/623.png",
	"images/thumbnails/624.png",
	"images/624.png",
	"images/thumbnails/625.png",
	"images/625.png",
	"images/thumbnails/626.png",
	"images/626.png",
	"images/thumbnails/627.png",
	"images/627.png",
	"images/thumbnails/628.png",
	"images/628.png",
	"images/thumbnails/629.png",
	"images/629.png",
	"images/thumbnails/630.png",
	"images/630.png",
	"images/thumbnails/631.png",
	"images/631.png",
	"images/thumbnails/632.png",
	"images/632.png",
	"images/thumbnails/633.png",
	"images/633.png",
	"images/thumbnails/634.png",
	"images/634.png",
	"images/thumbnails/635.png",
	"images/635.png",
	"images/thumbnails/636.png",
	"images/636.png",
	"images/thumbnails/637.png",
	"images/637.png",
	"images/thumbnails/638.png",
	"images/638.png",
	"images/thumbnails/639.png",
	"images/639.png",
	"images/thumbnails/640.png",
	"images/640.png",
	"images/thumbnails/641.png",
	"images/641.png",
	"images/thumbnails/642.png",
	"images/642.png",
	"images/thumbnails/643.png",
	"images/643.png",
	"images/thumbnails/644.png",
	"images/644.png",
	"images/thumbnails/645.png",
	"images/645.png",
	"images/thumbnails/646.png",
	"images/646.png",
	"images/thumbnails/647.png",
	"images/647.png",
	"images/thumbnails/648.png",
	"images/648.png",
	"images/thumbnails/649.png",
	"images/649.png",
	"images/thumbnails/650.png",
	"images/650.png",
];

try {
	importScripts("js/pokemon.js");
} catch (e) {}

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(cacheName)
			.then((cache) => {
				cache.addAll(precacheList);
				// console.log(precacheList);
			})
			.then(() => {
				return self.skipWaiting();
			})
	);
});

self.addEventListener("activate", (event) => {
	console.log("Service worker activated");
	event.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key != cacheName) {
						console.log("Removing old cache", key);
						return caches.delete(key);
					}
				})
			);
		})
	);
	return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	const parsedUrl = new URL(event.request.url);
	// console.log(parsedUrl);
	// if (parsedUrl.pathname == "/pokedex/view.php" && !navigator.onLine) {
	// 	var id = parseInt(parsedUrl.searchParams.get("id")) - 1;
	// 	console.log(id);

	// 	var pokemon = pokemonData.pokemon[id];
	// 	console.log(pokemon);

	// 	const body = `

	// 			<!doctype html>

	// 			<head>
	// 			<title>PokÃ©mon - ${pokemon.name}</title>
	// 			<meta charset="utf-8">
	// 			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	// 			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	// 			<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400&display=swap" rel="stylesheet">
	// 			<link rel="stylesheet" media="all" href="/css/theme.min.css" />
	// 			<link rel="shortcut icon" href="/images/fpokeball-icon.svg" type="image/x-icon">
	// 			<link rel="icon" href="/images/pokeball-icon.svg" type="image/x-icon">
	// 			<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
	// 			<link rel="apple-touch-icon" size="152x152" href="/images/apple-touch-icon-ipad.png">
	// 			<!-- <script src="/js/custom.js"></script> -->
	// 			<script src="/js/yall.min.js"></script>
	// 			<!-- <script src="/js/weighted-random.js"></script> -->

	// 				<meta property="og:url" content="http://localhost/pokedex/view.php" />
	// 			<meta property="og:title" content="PokÃ©mon - ${pokemon.name}" />
	// 			<meta property="og:description" content="Your personal pokÃ©dex. Built by Ben Wille" />
	// 			<meta property="og:image" content="" />

	// 			</head>

	// 			<body  class="pokemon-single" >

	// 			<header>
	// 				<div class="container">
	// 				<nav class="navbar navbar-dark navbar-expand-sm">
	// 					<div class="container">
	// 					<a href="/index.php">
	// 						<img class="wordmark" src="/images/pokemon_logo.png" alt="Pokemon" />
	// 					</a>

	// 					<button class="navbar-toggler mb-2" type="button" data-toggle="collapse" data-target="#myTogglerNav" aria-controls="myTogglerNav" aria-expanded="false" aria-label="Toggle navigation">
	// 						<span class="navbar-toggler-icon"></span>
	// 					</button>

	// 					<div class="collapse navbar-collapse text-right" id="myTogglerNav">
	// 						<div class="navbar-nav ml-3">
	// 						<a class="nav-item nav-link" href="/pokedex">Pokedex</a>
	// 						<a class="nav-item nav-link" href="/packs">Packs</a>
	// 									</div><!-- navbar -->
	// 					</div>
	// 					<!--collapse-->
	// 							</div><!-- container -->
	// 				</nav><!-- nav -->

	// 				</div>

	// 			</header><!-- Header Container -->

	// 			<div class="container" id="content">

	// 			<div id="" class="position-relative">

	// 			<a class="back-link" href="/pokedex/index.php#${
	// 				pokemon.id
	// 			}"><svg id="Layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384"><title>close</title><path d="M256,64C150.13,64,64,150.13,64,256s86.13,192,192,192,192-86.13,192-192S361.87,64,256,64Zm0,352c-88.22,0-160-71.78-160-160S167.78,96,256,96s160,71.78,160,160S344.22,416,256,416Z" transform="translate(-64 -64)"/><path d="M315.31,196.69a16,16,0,0,0-22.62,0L256,233.38l-36.69-36.69a16,16,0,0,0-22.62,22.62L233.38,256l-36.69,36.69a16,16,0,1,0,22.62,22.62L256,278.62l36.69,36.69a16,16,0,0,0,22.62-22.62L278.62,256l36.69-36.69a16,16,0,0,0,0-22.62Z" transform="translate(-64 -64)"/></svg></a>

	// 			<div class="pokemon show">
	// 				<div class="d-flex justify-content-center mt-5">
	// 				<img src="/images/${pokemon.id.padStart(3, "0")}.png">
	// 				</div>
	// 					<h1 class="text-uppercase text-white text-center font-weight-light"><span class="font-weight-thin">${pokemon.id.padStart(
	// 						3,
	// 						"0"
	// 					)}</span> ${pokemon.name}</h1>

	// 				<div class="attributes d-flex justify-content-between justify-content-lg-around flex-wrap text-white my-3">
	// 				<div>
	// 					<span class="text-uppercase font-weight-bold">Weight</span>: ${(
	// 						pokemon.weight * 0.220462
	// 					).toFixed(2)}lbs.
	// 				</div>
	// 				<div>
	// 					<span class="text-uppercase font-weight-bold">Height:</span> ${Math.floor(
	// 						pokemon.height / 0.25 / 12
	// 					)}' ${Math.floor(pokemon.height / 0.25) % 12}&quot;      </div>
	// 				<div class="text-uppercase">
	// 					<span class="font-weight-bold">Types:</span> ${pokemon.types.join(
	// 						"/"
	// 					)}      </div>
	// 				</div>

	// 				<div class="text-white">
	// 				<div class="font-weight-bold text-uppercase">Description</div>
	// 				<div class="font-weight-light">${pokemon.description}</div>
	// 				</div>

	// 				<hr />

	// 				</div>

	// 			</div>

	// 	`;
	// 	const response = new Response(body, {
	// 		status: 200,
	// 		statusText: "OK",
	// 		headers: {
	// 			"Content-type": "text/html",
	// 		},
	// 	});
	// 	event.respondWith(response);
	// }
	// else
	{
		//Cache-first
		event.respondWith(
			caches.match(event.request).then((response) => {
				if (response) {
					return response;
				} else {
					if (
						parsedUrl.pathname.match(/^\/images*/) ||
						parsedUrl.pathname.match(/^\/fonts*/)
					) {
						const fetchRequest = fetch(event.request).then(
							(networkResponse) => {
								return caches.open(cacheName).then((cache) => {
									cache.put(event.request, networkResponse.clone());
									console.log("Newly added item to cache");

									return networkResponse;
								});
							}
						);
						return fetchRequest;
					} else {
						return fetch(event.request);
					}
				}
			})
		);
	}
});
