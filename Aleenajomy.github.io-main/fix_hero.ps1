$file = "src\App.js"
$content = Get-Content $file -Raw -Encoding UTF8

# Fix h1 - replace anime-hero-title broken markup with proper block spans
$content = $content -replace '(?s)<motion\.h1 className="anime-hero-title[^"]*" \{\.\.\.reveal\(0\.08, 12\)\}>\s*Hi, I&apos;m Aleena\s*<span className="block text-cyan-400">Backend-Focused</span>\s*<span className="block text-white">Full-Stack Developer</span>\s*</motion\.h1>', '<motion.h1
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
                style={{ lineHeight: 1.2 }}
                {...reveal(0.08, 12)}
              >
                <span className="block">Hi, I&apos;m Aleena</span>
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.6)]">Backend-Focused</span>
                <span className="block">Full-Stack Developer</span>
              </motion.h1>'

Set-Content $file $content -Encoding UTF8
Write-Host "Done"
