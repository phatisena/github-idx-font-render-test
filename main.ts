function SetupMySprite () {
    mySprite20241017T053106126Z = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    mySprite20241017T054920326Z = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    mySprite20241017T053106126Z.setFlag(SpriteFlag.Invisible, true)
    mySprite20241017T054920326Z.setFlag(SpriteFlag.Invisible, true)
    QrSprite = sprites.create(qrcode.imageQRCode("https://bit.ly/git-phatisena-idxfont"), SpriteKind.Player)
    QrSprite.image.replace(15, 3)
    QrSprite.image.replace(1, 15)
    QrSprite.image.replace(3, 1)
}
function PageSampleRender () {
    if (SwapPage) {
        PageUpdate("TH:สวัสดีผมณภัทรมาจากประเทศไทย \\n นี่เป็นโปรเจคทดสอบเรนเดอร์ \\n ข้อความภาษาไทยในเมคโค้ดอาเขต \\n ซึ่งเป็นเอนจิ้นเกมของไมโครซอฟท์ \\n ขอบคุณที่เยี่ยมชมนะ   UWU \\n rm:phatisena/idx-font \\n cr:rishiporwal/custom-fonts", 160)
        QrSprite.right = scene.screenWidth()
        QrSprite.bottom = scene.screenHeight() - scene.screenHeight() / 6.6
    } else {
        PageUpdate("EN:HiI'mMr.NaphatI'mFromThailand \\n ThisIsAnRenderProject \\n AndUseTheExtension \\n Git:phatisena/idx-font \\n Cr:rishiporwal/custom-fonts \\n AndThisIsNotTheGameProject \\n ThankYou. Phatisena   UWU", 160)
        QrSprite.right = scene.screenWidth()
        QrSprite.bottom = scene.screenHeight() - scene.screenHeight() / 2.1
    }
}
function SetupBasicUnicode () {
    idxfont.SetSpace(1)
    idxfont.setCharFromSheet(
    0,
    assets.image`myImage1`,
    "§!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°©®",
    "",
    "",
    8,
    16,
    1,
    0,
    15,
    3
    )
    idxfont.setCharFromSheet(
    0,
    assets.image`myImage2`,
    "กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮะาเแโใไฤฦๅั็ํิีึืุู์่้๊๋ำ฿๐๑๒๓๔๕๖๗๘๙",
    "ั็ํิีึืุู์่้๊๋",
    "ั็ํิีึื์่้๊๋",
    8,
    16,
    1,
    0,
    15,
    3
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    SwapPage = !(SwapPage)
    PageSampleRender()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    SlideShow = !(SlideShow)
    scene.setBackgroundImage(image.create(scene.screenWidth(), scene.screenHeight()))
    if (!(SlideShow)) {
        scene.backgroundImage().fillRect(0, scene.screenHeight() - 4, scene.screenWidth(), scene.screenHeight() - (scene.screenHeight() - 4), 1)
    }
})
function PageUpdate (Txt: string, Wit: number) {
    RenderSprite.setImage(idxfont.SetImage(
    Txt,
    Wit,
    0,
    1
    ))
    RenderSprite.left = 1
    RenderSprite.top = 1
}
let QrSprite: Sprite = null
let mySprite20241017T054920326Z: Sprite = null
let mySprite20241017T053106126Z: Sprite = null
let SlideShow = false
let SwapPage = false
let RenderSprite: Sprite = null
scene.setBackgroundColor(15)
SetupMySprite()
SetupBasicUnicode()
RenderSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let NotTesting = true
SwapPage = true
SlideShow = true
if (NotTesting) {
    PageSampleRender()
} else {
    PageUpdate("เถ้าธุฬี", 160)
}
game.onUpdateInterval(2006, function () {
    if (NotTesting) {
        if (SlideShow) {
            SwapPage = !(SwapPage)
            PageSampleRender()
        }
    }
})
