# 🚀 DEPLOY NOW - Финальные шаги

## ✅ ЧТО ГОТОВО:

- [x] Код v2.0 полностью готов
- [x] Build успешен (`npm run build` ✓)
- [x] Все зависимости установлены
- [x] Cygre шрифты на месте
- [x] Get Started кнопка сохранена

## 🎯 ЧТО ОСТАЛОСЬ (1 команда):

### Вариант A: Vercel CLI (5 секунд)

```bash
cd /root/.openclaw/workspace/relicona-redesign

# Получи токен: https://vercel.com/account/tokens
vercel deploy --prod --token=<YOUR_TOKEN>
```

### Вариант B: Vercel Dashboard (UI)

1. Открой: https://vercel.com/dashboard
2. Найди проект: `relicona-site`
3. Settings → Git
4. Import Git Repository → Connect to GitHub
5. После подключения: Deploy автоматически запустится

### Вариант C: Прямой деплой (без Git)

```bash
cd /root/.openclaw/workspace/relicona-redesign
vercel deploy --prod
# Vercel CLI попросит войти через браузер
```

## 📦 Все файлы готовы:

```
✅ app/page.tsx              - Главная страница
✅ app/layout.tsx            - Layout
✅ app/globals.css           - Стили + Cygre fonts
✅ components/ui/GetStartedButton.tsx - Кнопка
✅ public/fonts/Cygre-*.woff2 - Шрифты
✅ tailwind.config.ts        - Конфиг
✅ .next/                    - Build готов!
```

## 🔥 Vercel Token

Получи здесь: https://vercel.com/account/tokens

Permissions нужны:
- ✅ Full Access (или Deploy)

Потом:

```bash
export VERCEL_TOKEN="твой_токен"
cd /root/.openclaw/workspace/relicona-redesign
vercel deploy --prod --token=$VERCEL_TOKEN
```

## ⚡ Мгновенный деплой (команда готова):

Скопируй, вставь токен и запусти:

```bash
cd /root/.openclaw/workspace/relicona-redesign && vercel deploy --prod --token=YOUR_TOKEN_HERE
```

---

## ✅ После деплоя:

URL будет вида: `https://relicona-site-xxx.vercel.app`

Проверь:
- [ ] Шрифт Cygre загружается
- [ ] Get Started кнопка с градиентом
- [ ] Falling pattern анимация
- [ ] Mobile responsive

---

**Время деплоя:** ~30 секунд после команды
**Status:** Build готов, ждёт команды deploy ⚡
