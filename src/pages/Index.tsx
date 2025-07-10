import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-electric-blue via-electric-gray to-electric-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-electric-yellow shadow-2xl">
                  <img
                    src="/img/2ceb5983-a18c-4659-ada0-0460bde55bb1.jpg"
                    alt="Пряжников Александр Иванович"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-electric-yellow rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-electric-dark" />
                </div>
              </div>
            </div>

            {/* Title & Motto */}
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Пряжников
                <br />
                <span className="text-electric-yellow">Александр Иванович</span>
              </h1>
              <div className="text-2xl font-medium italic border-l-4 border-electric-yellow pl-6">
                "От проводки до света — мы соединяем мир!"
              </div>
              <div className="flex justify-center md:justify-start space-x-4 pt-4">
                <Button className="bg-electric-yellow text-electric-dark hover:bg-yellow-400 font-semibold px-8 py-3">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-electric-blue px-8 py-3"
                >
                  <Icon name="FileText" size={20} className="mr-2" />
                  Резюме
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-electric-dark">
            Специализация
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "Zap", label: "Электромонтаж" },
              { icon: "Wrench", label: "Ремонт" },
              { icon: "Settings", label: "Настройка" },
              { icon: "Shield", label: "Безопасность" },
            ].map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-electric-yellow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={skill.icon} size={32} className="text-white" />
                </div>
                <h3 className="font-semibold text-electric-dark">
                  {skill.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-electric-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-electric-dark">
            Биография
          </h2>

          <div className="space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-electric-dark">
                      Происхождение
                    </h3>
                    <p className="text-gray-700">
                      Александр Иванович Пряжников родился в живописном городе
                      Гусев, расположенном в Калининградской области. С ранних
                      лет его тянуло к знаниям.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-electric-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="GraduationCap"
                      size={24}
                      className="text-electric-dark"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-electric-dark">
                      Образование: Психология
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>2004-2006:</strong> Педагогический колледж города
                      Черняховска, факультет психологии
                    </p>
                    <p className="text-gray-700">
                      Получил ценные базовые знания в области психологии и
                      педагогики, научился понимать потребности и мотивы людей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-electric-gray rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-electric-dark">
                      Военная служба
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>2006-2010:</strong> Служба в Вооруженных силах
                      Российской Федерации
                    </p>
                    <p className="text-gray-700">
                      Этап физической закалки и формирования дисциплины. Развил
                      навыки стойкости, ответственности и умения работать в
                      команде.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-electric-yellow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-blue to-electric-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-electric-dark">
                      Техническое образование
                    </h3>
                    <p className="text-gray-700 mb-2">
                      <strong>2010-2015:</strong> Гусевский политехнический
                      техникум, специальность «техник-электрик»
                    </p>
                    <p className="text-gray-700">
                      Получил необходимые технические знания и навыки в области
                      электротехники. Одновременно изучал программирование для
                      расширения компетенций.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-electric-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Готовы к сотрудничеству?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Разносторонний опыт и стремление к развитию делают меня ценным
            специалистом в мире электротехники и программирования.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-electric-yellow text-electric-dark hover:bg-yellow-400 font-semibold px-8 py-4 text-lg">
              <Icon name="Phone" size={24} className="mr-2" />
              Позвонить
            </Button>
            <Button
              variant="outline"
              className="border-electric-yellow text-electric-yellow hover:bg-electric-yellow hover:text-electric-dark font-semibold px-8 py-4 text-lg"
            >
              <Icon name="Mail" size={24} className="mr-2" />
              Написать
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
