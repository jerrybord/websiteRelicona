# 🚀 ФИНАЛЬНЫЕ ИНСТРУКЦИИ ПО ДЕПЛОЮ

## ✅ ЧТО ГОТОВО

- [x] v2.0 полностью готов и закоммичен
- [x] Ветка: `v2.0-redesign`
- [x] Репозиторий: https://github.com/jerrybord/websiteRelicona
- [x] Все файлы на месте
- [x] Cygre шрифты добавлены
- [x] Get Started кнопка с оригинальным градиентом
- [x] Falling pattern сохранён

## 📤 PUSH НА GITHUB (2 варианта)

### Вариант A: GitHub Token (быстрый)

```bash
cd /root/.openclaw/workspace/relicona-redesign

# Создай токен: https://github.com/settings/tokens
# Permissions: repo (full control)

git remote set-url origin https://<TOKEN>@github.com/jerrybord/websiteRelicona.git
git push origin v2.0-redesign
```

### Вариант B: SSH Key (если настроен)

```bash
cd /root/.openclaw/workspace/relicona-redesign

# Добавь публичный ключ в GitHub:
cat ~/.ssh/id_relicona.pub

# Копируй вывод и добавь: https://github.com/settings/keys
# Потом:
git push origin v2.0-redesign
```

## 🚀 DEPLOY НА VERCEL

### После успешного push:

1. **Открой Vercel Dashboard:**  
   https://vercel.com/dashboard

2. **Найди проект:**  
   `websiteRelicona`

3. **Deploy ветку:**
   - Settings → Git
   - Deploy Branch: выбери `v2.0-redesign`
   - Нажми Deploy

### Или через CLI:

```bash
cd /root/.openclaw/workspace/relicona-redesign
npm install
vercel --prod
```

## 🔄 MERGE В MAIN (после проверки)

Когда убедишься, что v2.0 работает:

```bash
cd /root/.openclaw/workspace/relicona-redesign
git checkout main
git merge v2.0-redesign
git push origin main
```

## 📊 ПРОВЕРКА ПОСЛЕ ДЕПЛОЯ

- [ ] Открой сайт (Vercel даст URL)
- [ ] Проверь шрифт Cygre загружается
- [ ] Get Started кнопка с градиентом работает
- [ ] Falling pattern анимация видна на desktop
- [ ] Mobile responsive (открой в DevTools)
- [ ] Все 3 секции: Hero, Features, Footer

## 🆘 ЕСЛИ ЧТО-ТО НЕ РАБОТАЕТ

### Проблема: npm install падает

```bash
cd /root/.openclaw/workspace/relicona-redesign
rm -rf node_modules package-lock.json
npm install
```

### Проблема: Vercel не видит ветку

- Зайди в Settings → Git → Connected Git Repository
- Reconnect repository
- Попробуй снова

### Проблема: Шрифт не грузится

Проверь в браузере:
- DevTools → Network → Filter: Font
- Должны быть: `Cygre-Regular.woff2`, `Cygre-SemiBold.woff2`

## 📁 СТРУКТУРА ПРОЕКТА

```
relicona-redesign/
├── app/
│   ├── page.tsx          ← Главная страница
│   ├── layout.tsx        ← Layout + metadata
│   └── globals.css       ← Стили + Cygre fonts
├── components/ui/
│   └── GetStartedButton.tsx  ← Кнопка с градиентом
├── public/fonts/
│   ├── Cygre-Regular.woff2   ← Шрифт
│   └── Cygre-SemiBold.woff2  ← Шрифт (жирный)
└── configs (tailwind, ts, etc.)
```

## 🎯 ИТОГО

1. **Push на GitHub** (через token или SSH)
2. **Deploy на Vercel** (через dashboard или CLI)
3. **Проверить** работу сайта
4. **Merge в main** (если всё ОК)

---

**Текущий статус:**
- ✅ Код готов (100%)
- ⏳ Push (нужна авторизация GitHub)
- ⏳ Deploy (после push)

**Ветка:** `v2.0-redesign`  
**Коммит:** `34ddccb` - Complete v2.0 redesign 🚀

**Любые вопросы?** Пиши в Telegram! 📱
