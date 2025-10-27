import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [activeSection, setActiveSection] = useState("episodes");
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  const animals = [
    {
      name: "Африканский лев",
      fact: "Львы спят до 20 часов в день!",
      icon: "Cat",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Слон",
      fact: "Слоны умеют плавать и общаться на расстоянии до 10 км",
      icon: "Waves",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Дельфин",
      fact: "Дельфины спят с одним открытым глазом",
      icon: "Fish",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      name: "Бабочка",
      fact: "Бабочки чувствуют вкус лапками!",
      icon: "Bug",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Пингвин",
      fact: "Пингвины могут прыгать на высоту до 2 метров",
      icon: "Bird",
      color: "bg-slate-100 text-slate-600"
    },
    {
      name: "Жираф",
      fact: "Язык жирафа может достигать 50 см в длину",
      icon: "TreePine",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const episodes = [
    { 
      number: 18, 
      title: "Спасённые в зоопарках", 
      date: "Сентябрь 2024", 
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", 
      description: "Узнай истории животных, которых спасли от вымирания благодаря зоопаркам. Как учёные возвращают редкие виды в дикую природу.",
      segments: [
        { title: "История заброшки и друзья", time: "0:30", icon: "BookOpen" },
        { title: "Два постера", time: "5:15", icon: "Image" },
        { title: "Красная книга", time: "10:00", icon: "BookHeart" },
        { title: "Мастерская", time: "15:20", icon: "Hammer" },
        { title: "Ташкин репортаж", time: "20:45", icon: "Video" },
        { title: "Турнир знатоков", time: "25:10", icon: "Trophy" },
        { title: "Игра на память", time: "30:00", icon: "Brain" }
      ]
    },
    { number: 17, title: "Речная лошадь", date: "Июнь 2025", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Бегемот — один из самых опасных гигантов Африки. Узнай, почему его называют речной лошадью и как он живёт в воде." },
    { number: 16, title: "Как помочь животным", date: "Май 2025", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Каждый может помочь природе! Узнай простые способы, как дети и взрослые защищают животных и их дома." },
    { number: 15, title: "Яркая мандаринка", date: "Апрель 2025", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Мандаринка — самая красочная утка в мире. Смотри, как она плавает и почему её перья переливаются всеми цветами радуги." },
    { number: 14, title: "С улыбкой из Австралии", date: "Март 2025", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Квокка — самое счастливое животное планеты. Узнай, почему эти зверьки всегда улыбаются и где их можно встретить." },
    { number: 13, title: "Бабочка: хрупкая красота", date: "Февраль 2025", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Удивительный мир бабочек: от крошечной гусеницы до прекрасного крылатого создания. Узнай о самых красивых видах планеты." },
    { number: 12, title: "Замечательные ослики", date: "Январь 2025", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Ослики — верные друзья человека. Узнай, почему они такие умные, выносливые и как помогают людям уже тысячи лет." },
    { number: 11, title: "Змеи: страшные, но интересные", date: "Декабрь 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Узнай удивительные факты о самых необычных змеях планеты. Почему они так важны для природы и как себя вести при встрече с ними." },
    { number: 10, title: "Мировые редкости", date: "Ноябрь 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Познакомься с самыми редкими животными Земли. Узнай, как учёные защищают исчезающие виды и что каждый может сделать для сохранения природы." },
    { number: 9, title: "Не медведь: Росомаха", date: "Октябрь 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Росомаха — один из самых отважных зверей северных лесов. Смотри, как она охотится и почему её называют «маленьким медведем»." },
    { number: 8, title: "Повелитель полуострова", date: "Сентябрь 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Отправляйся в путешествие на Камчатку, где живут самые большие бурые медведи. Узнай об их повадках и образе жизни." },
    { number: 7, title: "Морские млекопитающие", date: "Август 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Погрузись в мир океана вместе с дельфинами, китами и тюленями. Узнай, как они дышат под водой и общаются друг с другом." },
    { number: 6, title: "Самый редкий тигр", date: "Июль 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Амурский тигр — символ дикой природы России. Смотри уникальные кадры из заповедников и узнай, как спасают этих величественных кошек." },
    { number: 5, title: "Уморительный мандрил", date: "Июнь 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Познакомься с самой яркой обезьяной планеты! Узнай, почему мандрилы такие разноцветные и как они живут в африканских джунглях." },
    { number: 4, title: "Охотник за эвкалиптом", date: "Май 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Коала — самый милый житель Австралии. Узнай, почему они спят 20 часов в сутки и едят только эвкалипт." },
    { number: 3, title: "Принц Персии", date: "Апрель 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Персидский леопард — загадочный хищник горных вершин. Смотри, как он охотится и прячется среди скал." },
    { number: 2, title: "С днём панды", date: "Март 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Отмечаем Международный день панды! Узнай забавные факты о бамбуковых медведях и посмотри, как их растят в зоопарках." },
    { number: 1, title: "Самый высокий на планете", date: "Февраль 2024", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Жираф — самое высокое животное на Земле. Узнай, как он пьёт воду, спит стоя и почему у него такая длинная шея." },
    { number: 0, title: "Дракон острова Комодо", date: "Ноябрь 2023", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Комодский варан — самая большая ящерица планеты. Узнай, почему его называют драконом и как он охотится на добычу втрое больше себя." },
    { number: -1, title: "Золотая антилопа", date: "Сентябрь 2023", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", description: "Познакомься с грациозной антилопой, чья шерсть сияет на солнце как золото. Узнай, где она живёт и как спасается от хищников.", thumbnail: "https://cdn.poehali.dev/projects/3af6c5d2-9bdc-4001-bee7-f6cc21263721/files/0df77b7e-e2d5-4721-8492-ba3ba1fe7aa1.jpg" }
  ];

  const games = [
    { title: "Угадай животное", description: "Викторина о животных мира", icon: "HelpCircle" },
    { title: "Пазл природы", description: "Собери картинку с животными", icon: "Puzzle" },
    { title: "Найди пару", description: "Мемори-игра с животными", icon: "Grid3x3" }
  ];

  const contests = [
    { title: "Лучший рисунок", deadline: "До 30 ноября", prize: "Набор карандашей" },
    { title: "Фото питомца", deadline: "До 15 декабря", prize: "Книга о животных" }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/3af6c5d2-9bdc-4001-bee7-f6cc21263721/files/e79f3eb4-a368-40d3-9910-6290d0b2fa8f.jpg" 
                alt="Тошка" 
                className="w-16 h-16 rounded-full border-4 border-primary shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-primary">Тошка и компания</h1>
                <p className="text-sm text-muted-foreground">Весёлый журнал о животных</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-2">
              <Button variant={activeSection === "home" ? "default" : "ghost"} onClick={() => setActiveSection("home")}>
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant={activeSection === "animals" ? "default" : "ghost"} onClick={() => setActiveSection("animals")}>
                <Icon name="Squirrel" size={18} className="mr-2" />
                Животные
              </Button>
              <Button variant={activeSection === "episodes" ? "default" : "ghost"} onClick={() => setActiveSection("episodes")}>
                <Icon name="Play" size={18} className="mr-2" />
                Выпуски
              </Button>
              <Button variant={activeSection === "games" ? "default" : "ghost"} onClick={() => setActiveSection("games")}>
                <Icon name="Gamepad2" size={18} className="mr-2" />
                Игры
              </Button>
              <Button variant={activeSection === "contests" ? "default" : "ghost"} onClick={() => setActiveSection("contests")}>
                <Icon name="Trophy" size={18} className="mr-2" />
                Конкурсы
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {activeSection === "home" && (
          <>
            <section className="relative py-20 overflow-hidden bg-gradient-to-br from-accent via-muted to-background">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 animate-fade-in">
                    <Badge className="text-lg px-4 py-2">🎬 Образовательная программа</Badge>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                      Открывай мир <span className="text-primary">животных</span> вместе с нами!
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      Увлекательные истории, удивительные факты и весёлые приключения в каждом выпуске
                    </p>
                    <div className="flex gap-4">
                      <Button size="lg" className="text-lg" onClick={() => setActiveSection("episodes")}>
                        <Icon name="PlayCircle" size={24} className="mr-2" />
                        Смотреть выпуски
                      </Button>
                      <Button size="lg" variant="outline" className="text-lg" onClick={() => setActiveSection("games")}>
                        <Icon name="Sparkles" size={24} className="mr-2" />
                        Играть
                      </Button>
                    </div>
                  </div>
                  <div className="relative animate-scale-in">
                    <img 
                      src="https://cdn.poehali.dev/projects/3af6c5d2-9bdc-4001-bee7-f6cc21263721/files/01841785-46cb-4903-afcc-c9b677b00f92.jpg"
                      alt="Животные"
                      className="rounded-3xl shadow-2xl border-8 border-white"
                    />
                    <div className="absolute -top-6 -right-6 bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center text-4xl animate-pulse">
                      🐾
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold mb-4">Почему дети любят Тошку?</h3>
                  <p className="text-xl text-muted-foreground">Образование через развлечение</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { icon: "BookOpen", title: "Познавательно", desc: "Научные факты простым языком" },
                    { icon: "Smile", title: "Весело", desc: "Игры и конкурсы каждую неделю" },
                    { icon: "Heart", title: "С любовью", desc: "Воспитываем заботу о природе" },
                    { icon: "Star", title: "Качественно", desc: "Красивая съёмка и анимация" }
                  ].map((item, i) => (
                    <Card key={i} className="text-center hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                      <CardHeader>
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name={item.icon as any} size={32} className="text-primary" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === "animals" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">🦁 Удивительные факты о животных</h2>
                <p className="text-xl text-muted-foreground">Узнавай новое каждый день!</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {animals.map((animal, i) => (
                  <Card key={i} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all animate-fade-in overflow-hidden group">
                    <div className={`h-2 ${animal.color.split(' ')[0]} group-hover:h-4 transition-all`}></div>
                    <CardHeader>
                      <div className={`w-20 h-20 ${animal.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon name={animal.icon as any} size={40} />
                      </div>
                      <CardTitle className="text-2xl text-center">{animal.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-lg">{animal.fact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "episodes" && (
          <section className="py-16 bg-gradient-to-br from-muted to-background">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">📺 Последние выпуски</h2>
                <p className="text-xl text-muted-foreground">Смотри новые серии каждую неделю</p>
                <Badge variant="secondary" className="text-lg px-4 py-2 mt-4">
                  Всего выпусков: {episodes.length}
                </Badge>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {episodes.map((episode, i) => (
                  <Card key={i} className="hover-scale border-2 hover:border-primary transition-all animate-fade-in overflow-hidden">
                    <CardHeader className="flex flex-row items-center gap-6">
                      {episode.thumbnail ? (
                        <img 
                          src={episode.thumbnail} 
                          alt={episode.title}
                          className="w-32 h-20 object-cover rounded-lg shadow-lg"
                        />
                      ) : (
                        <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                          {episode.number}
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{episode.title}</CardTitle>
                        <CardDescription className="text-base">{episode.date}</CardDescription>
                      </div>
                      <Button size="lg" onClick={() => setSelectedEpisode(episode.number)}>
                        <Icon name="Play" size={24} className="mr-2" />
                        Смотреть
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "games" && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">🎮 Развивающие игры</h2>
                <p className="text-xl text-muted-foreground">Играй и учись одновременно</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {games.map((game, i) => (
                  <Card key={i} className="hover-scale cursor-pointer border-2 hover:border-secondary transition-all animate-scale-in text-center">
                    <CardHeader>
                      <div className="w-24 h-24 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={game.icon as any} size={48} />
                      </div>
                      <CardTitle className="text-2xl">{game.title}</CardTitle>
                      <CardDescription className="text-base">{game.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="lg" className="w-full">
                        <Icon name="Play" size={20} className="mr-2" />
                        Играть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === "contests" && (
          <section className="py-16 bg-gradient-to-br from-accent to-muted">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">🏆 Конкурсы</h2>
                <p className="text-xl text-muted-foreground">Участвуй и выигрывай призы!</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {contests.map((contest, i) => (
                  <Card key={i} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all animate-fade-in">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Award" size={32} />
                      </div>
                      <CardTitle className="text-2xl text-center">{contest.title}</CardTitle>
                      <CardDescription className="text-base text-center">
                        <Badge variant="secondary" className="mt-2">{contest.deadline}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-lg">
                        <strong>Приз:</strong> {contest.prize}
                      </p>
                      <Button size="lg" className="w-full">
                        <Icon name="Send" size={20} className="mr-2" />
                        Участвовать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Dialog open={selectedEpisode !== null} onOpenChange={() => setSelectedEpisode(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedEpisode && episodes.find(ep => ep.number === selectedEpisode)?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
            {selectedEpisode && (
              <video
                width="100%"
                height="100%"
                controls
                className="w-full h-full"
                poster={episodes.find(ep => ep.number === selectedEpisode)?.videoUrl}
              >
                <source src={episodes.find(ep => ep.number === selectedEpisode)?.videoUrl} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            )}
          </div>
          {selectedEpisode && (
            <>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-lg leading-relaxed">
                  {episodes.find(ep => ep.number === selectedEpisode)?.description}
                </p>
              </div>
              
              {episodes.find(ep => ep.number === selectedEpisode)?.segments && (
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-3">Рубрики выпуска:</h3>
                  <div className="grid gap-2">
                    {episodes.find(ep => ep.number === selectedEpisode)?.segments?.map((segment: any, i: number) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="justify-start h-auto py-3 px-4"
                        onClick={() => {
                          const video = document.querySelector('video') as HTMLVideoElement;
                          if (video) {
                            const [minutes, seconds] = segment.time.split(':').map(Number);
                            video.currentTime = minutes * 60 + seconds;
                            video.play();
                          }
                        }}
                      >
                        <Icon name={segment.icon} size={20} className="mr-3" />
                        <div className="flex-1 text-left">
                          <div className="font-semibold">{segment.title}</div>
                        </div>
                        <Badge variant="secondary">{segment.time}</Badge>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="bg-primary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Тошка и компания</h4>
              <p className="text-white/80">Весёлый образовательный журнал о животных для детей</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white cursor-pointer">Главная</li>
                <li className="hover:text-white cursor-pointer">Животные</li>
                <li className="hover:text-white cursor-pointer">Выпуски</li>
                <li className="hover:text-white cursor-pointer">Игры</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  toshka@example.com
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  8-800-123-45-67
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>© 2024 Тошка и компания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;