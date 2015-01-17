var startDelay = 2000;

var notes = []; //存储全部音符
var start; //全局开始播放时间
var musicPlaying = false; //flag标志全局是否正在播放音乐

var player; //全局midi播放器
var clock = new THREE.Clock();

window.onload = function() {
  MIDI.loadPlugin(function() {
    console.log("Sound being generated with " + MIDI.lang + ".");
    
    if (window.location.hash === '#' || window.location.hash === '') {
      //switchTo('tracks/157-Rachmaninov - Flight of the Bumblebee');
    }
  }, "soundfont/xylophone-mp3.js");
}

function switchTo(file) {
  var songName = file.substring(11);
  $('#current-song').text('Currently Playing: ' + songName);

  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", file, false);
  xmlhttp.send(null);
  var fileContent = xmlhttp.responseText;

  player = MIDI.Player;
  player.timeWarp = 1;

  player.stop();
  musicPlaying = false;
  notes = []; //音符数组
  timeInSong = -startDelay;
  lastUpdatedTime = null;

  player.loadFile(fileContent, function() {
    midiData = player.data;
    console.log('testingPlayerData');
    currentTime = 0;

    //扫描所有midi文件音符
    //MIDI文件每个因为分为interval持续时间以及 event。event包含其类型subtype，以及参数，noteNumber猜想应该是其音高
    //最终生成的notes数组 包含，第x秒，为第几个音符或为何种音频。
    for (var i = 0; i < midiData.length; i++) {
      midiDatum = midiData[i];

      midiEvent = midiDatum[0].event;
      interval = midiDatum[1];

      currentTime += interval;

      if (midiEvent.subtype === 'noteOn') {
        notes.push({ note: midiEvent.noteNumber, time: currentTime })
      }
    }


    addNotePins();
   

    player.addListener(function(data) {
      
      updateComb();
    }); 

    start = new Date();

    //在startDelay之后开始播放midi
    setTimeout(function() { 
      player.start();
    }, startDelay);

    musicPlaying = true;
  });
}
