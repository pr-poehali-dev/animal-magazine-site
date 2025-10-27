import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    { number: 34, title: "Змеи: страшные, но интересные", date: "24 декабря 2024" },
    { number: 33, title: "Мировые редкости", date: "17 декабря 2024" },
    { number: 32, title: "Не медведь: Росомаха", date: "10 декабря 2024" },
    { number: 31, title: "Повелитель полуострова", date: "3 декабря 2024" },
    { number: 30, title: "Морские млекопитающие", date: "26 ноября 2024" },
    { number: 29, title: "Самый редкий тигр", date: "19 ноября 2024" },
    { number: 28, title: "Уморительный мандрил", date: "12 ноября 2024" },
    { number: 27, title: "Охотник за эвкалиптом", date: "5 ноября 2024" },
    { number: 26, title: "Самый высокий на планете", date: "29 октября 2024" },
    { number: 25, title: "С днём панды", date: "22 октября 2024" },
    { number: 24, title: "Принц Персии", date: "15 октября 2024" }
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
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {episodes.map((episode, i) => (
                  <Card key={i} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all animate-fade-in">
                    <CardHeader className="flex flex-row items-center gap-6">
                      <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg">
                        {episode.number}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{episode.title}</CardTitle>
                        <CardDescription className="text-base">{episode.date}</CardDescription>
                      </div>
                      <Button size="lg">
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