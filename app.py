import streamlit as st
from pathlib import Path

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit'in tüm varsayılan sınırlarını ve boşluklarını sıfırlayan kesin CSS
st.markdown("""
    <style>
        /* Ana uygulama ve blok kapsayıcısı */
        .stApp, .block-container { 
            padding: 0rem !important; 
            max-width: 100% !important; 
            margin: 0 !important;
        }
        /* Iframe kapsayıcısı */
        div[data-testid="stIFrame"] {
            width: 100% !important;
            height: 100vh !important;
        }
        /* Iframe'in kendisi */
        iframe { 
            width: 100% !important; 
            height: 100vh !important; 
            border: none !important; 
        }
        /* Üst menü ve footer'ı gizle */
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Iframe'i tam genişlik (stretch) ve yükseklikte yükle
html_file_path = Path(__file__).parent / "static" / "index.html"
st.iframe(html_file_path, width='stretch', height=1000)